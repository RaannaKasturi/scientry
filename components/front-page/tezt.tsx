"use client";

import React from "react";
import { TagCloud } from "react-tagcloud";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MathJax } from "better-react-mathjax";

interface CategoryType {
    value: string;
    count: number;
}

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

export default function CombinedComponent() {
    const [categories, setCategories] = React.useState<CategoryType[]>([]);
    const [posts, setPosts] = React.useState<PostListProps[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    const url = "https://raannakasturi-rexplore-cors-proxy.hf.space/fetch-feed?url=https://thescientry.blogspot.com/feeds/posts/default?alt=json";

    React.useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "ok") {
                    const rawCategories = JSON.parse(data.data).feed.category;
                    const entries: Entry[] = JSON.parse(data.data).feed.entry;
                    const shuffledCategories = rawCategories
                        .sort(() => 0.5 - Math.random())
                        .slice(0, 15)
                        .filter((category: { term: string }) => category.term !== "ZZZZZZZZZ")
                        .map((category: { term: string }) => ({
                            value: category.term,
                            count: Math.floor(Math.random() * 10) + 10,
                        }));
                    setCategories(shuffledCategories);
                    const posts: PostListProps[] = [];
                    const titleSet = new Set();
                    const categorySet = new Set();
                    for (let i = 0; i < entries.length; i++) {
                        const entry = entries[i];
                        let link = "";
                        const title = <MathJax inline>{entry.title.$t}</MathJax>;
                        let category = null;
                        let image = "https://i.ibb.co/TBJqggw/Image-Not-Found.jpg";
                        if (entry.category && entry.category.length > 0) {
                            for (const cat of entry.category) {
                                if (cat.term !== "ZZZZZZZZZ" && !categorySet.has(cat.term)) {
                                    categorySet.add(cat.term);
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
                    setPosts(posts.sort(() => Math.random() - Math.random()).slice(0, 6));
                } else {
                    setError("Failed to fetch data.");
                }
            })
            .catch((err) => {
                console.error(err);
                setError("Failed to fetch data.");
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <div className="text-center text-white">Loading...</div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500">{`Error: ${error}`}</div>
        );
    }

    return (
        <div>
            {/* Categories Section */}
            <section id="categories" className="flex flex-col bg-neutral-900 text-white items-center space-y-5 py-10 px-5">
                <div className="flex justify-between w-full items-center">
                    <h2 className="text-2xl font-bold">Top Categories</h2>
                    <Button variant="default" onClick={() => alert("View All Categories")} className="text-white">
                        View All
                    </Button>
                </div>
                <TagCloud
                    className="flex flex-wrap justify-center gap-3 items-center hover:cursor-pointer"
                    minSize={20}
                    maxSize={35}
                    tags={categories}
                    onClick={(tag) =>
                        window.open(`https://thescientry.blogspot.com/search/label/${tag.value}`, "_blank noopener noreferrer")
                    }
                />
            </section>

            {/* Posts Section */}
            <section id="latest-papers" className="bg-secondary/20 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 w-full">
                    {posts.map((post, index) => (
                        <div
                            key={index}
                            className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg space-x-3"
                            onClick={() => window.open(post.link)}
                        >
                            <div className="relative h-24 w-24 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                                <Image
                                    src={post.image}
                                    alt={React.Children.toArray(post.title).join("")}
                                    style={{ objectPosition: "center center", objectFit: "cover" }}
                                    fill={true}
                                    sizes="100vw"
                                    className="group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex flex-col flex-grow text-start space-y-2">
                                <div className="w-fit bg-blue-600 text-white px-2 py-1 rounded">{post.category}</div>
                                <div className="text-2xl line-clamp-2 break-words">{post.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
