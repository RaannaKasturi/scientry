"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { MathJax } from "better-react-mathjax";

interface PostListProps {
    title: React.ReactNode;
    image: string;
    category: string;
    link: string;
}

interface Entry {
    title: { $t: string };
    category: { term: string }[];
    link: { rel: string; href: string }[];
    content?: { $t: string };
}

function fetchImage(content: string): string {
    const FALLBACK_IMAGE = "https://i.ibb.co/TBJqggw/Image-Not-Found.jpg";
    try {
        const imgRegex = /<img[^>]+id="paper_image"[^>]+src="([^"]+)"/;
        const match = content.match(imgRegex);
        if (match) {
            return match[1];
        } else {
            return FALLBACK_IMAGE;
        }
    } catch (error) {
        console.error("Error fetching image:", error);
        return FALLBACK_IMAGE;
    }
}

const Post = ({ shuffled_posts }: { shuffled_posts: PostListProps }) => {
    return (
        <div
            className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg relative space-x-3"
            onClick={() => {
                window.open(shuffled_posts.link);
            }}
        >
            <div className="relative h-24 w-24 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                <Image
                    src={shuffled_posts.image}
                    alt={React.Children.toArray(shuffled_posts.title).join('')}
                    style={{ objectPosition: "center center", objectFit: "cover" }}
                    fill={true}
                    sizes="100vw"
                    className="group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="flex flex-col flex-grow text-start space-y-2">
                <Badge
                    variant={"default"}
                    className="w-fit"
                    onClick={() =>
                        window.open(`https://thescientry.blogspot.com/search/label/${shuffled_posts.category}`)
                    }
                >
                    {shuffled_posts.category}
                </Badge>
                <div className="text-2xl line-clamp-2 break-words">{shuffled_posts.title}</div>
            </div>
        </div>
    );
};

const LoadingState = () => {
    return (
        <>
            {[...Array(2)].map((_, index) => (
                <div
                    key={index}
                    className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg relative space-x-3"
                >
                    <div className="relative h-24 w-24 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                            src={"https://i.ibb.co/TBJqggw/Image-Not-Found.jpg"}
                            alt={"Loading"}
                            style={{ objectPosition: "center center", objectFit: "cover" }}
                            fill={true}
                            sizes="100vw"
                            className="group-hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <div className="flex flex-col flex-grow text-start space-y-2">
                        <Badge variant={"default"} className="w-fit">
                            {"Loading"}
                        </Badge>
                        <div className="text-2xl line-clamp-2 break-words">{"Loading Posts Please Wait. . ."}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

const ErrorState = ({ error }: { error: string }) => {
    return (
        <div className="text-center text-red-500">
            <p>{`Error: ${error}`}</p>
        </div>
    );
};

function PostData({ globalCategory }: { globalCategory: string }) {
    const [shuffled_posts, setPosts] = React.useState<PostListProps[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);
    let url = 'https://thescientry.blogspot.com/feeds/posts/default?alt=json';
    if (globalCategory !== 'Latest Papers') {
        url = `https://thescientry.blogspot.com/feeds/posts/default/-/${globalCategory}?alt=json`
    }

    React.useEffect(() => {
        fetch(
            `https://raannakasturi-rexplore-cors-proxy.hf.space/fetch-feed?url=${url}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "ok") {
                    const posts: PostListProps[] = [];
                    const titleSet = new Set();
                    const categorySet = new Set();
                    const entries: Entry[] = JSON.parse(data.data).feed.entry;
                    for (let i = 0; i < entries.length; i++) {
                        const entry = entries[i];
                        let link = "";
                        const title = <MathJax inline>{entry.title.$t}</MathJax>;
                        let category = null;
                        let image = "https://i.ibb.co/TBJqggw/Image-Not-Found.jpg";
                        if (entry.category && entry.category.length > 0) {
                            for (const cat of entry.category) {
                                if (cat.term !== "ZZZZZZZZZ" && !categorySet.has(cat.term)) {
                                    if (globalCategory === 'Latest Papers') {
                                        categorySet.add(cat.term);
                                    }
                                    category = cat.term;
                                    break;
                                }
                            }
                        }
                        if (!category || titleSet.has(title)) continue;
                        titleSet.add(title);
                        try {
                            if (entry.content?.$t) {
                                image = fetchImage(entry.content.$t);
                            }
                        } catch (error) {
                            console.error("Image fetch failed, using default image.", error);
                        }
                        for (const linkObj of entry.link) {
                            if (linkObj.rel === "alternate") {
                                link = linkObj.href;
                                break;
                            }
                        }
                        posts.push({
                            title: title || "Untitled",
                            category: category || "Uncategorized",
                            link: link || "#",
                            image: image,
                        });
                    }
                    const shuffled_posts = posts.sort(() => Math.random() - Math.random());
                    setPosts(shuffled_posts.slice(0, 6));
                } else {
                    setError("No valid entries found");
                }
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to fetch data");
            })
            .finally(() => setLoading(false));
    }, [url, globalCategory]);

    if (loading) {
        return <LoadingState />;
    }

    if (error) {
        return <ErrorState error={error} />;
    }

    return (
        <>
            {shuffled_posts.map((shuffled_posts, index) => (
                <Post key={index} shuffled_posts={shuffled_posts} />
            ))}
        </>
    );
}

export default function PostList({ category }: { category: string }) {
    const formatCategoryName = (category: string) => {
        return category
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };
    return (
        <section id={"latest-papers"} className="bg-secondary/20 py-10">
            <div className="text-center justify-center items-center flex flex-col space-y-3 mx-5">
                <div className="flex justify-between md:justify-around w-full items-center">
                    <div className="flex flex-col text-start space-y-2">
                        <h2 className="md:text-4xl text-2xl font-bold">{formatCategoryName(category)}</h2>
                        <p className="text-xl text-secondary-foreground opacity-75">
                            View all recently added Research Papers
                        </p>
                    </div>
                    <Button variant={"default"} onClick={() => window.open('https://thescientry.blogspot.com/')}>View All</Button>
                </div>
                <div className="pb-5 border-gray-700 border-b-2 w-2/6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 w-full">
                    <PostData globalCategory={formatCategoryName(category)} />
                </div>
            </div>
        </section>
    );
}
