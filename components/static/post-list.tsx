"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import React, { useState } from "react"
import { MathJax } from "better-react-mathjax"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

interface PostListProps {
    title: React.ReactNode
    image: string
    category: string
    link: string
}

interface Entry {
    title: { $t: string }
    category: { term: string }[]
    link: { rel: string; href: string }[]
    content?: { $t: string }
}

function fetchImage(content: string): string {
    const FALLBACK_IMAGE = "https://i.ibb.co/TBJqggw/Image-Not-Found.jpg"
    try {
        const imgRegex = /<img[^>]+id="paper_image"[^>]+src="([^"]+)"/
        const match = content.match(imgRegex)
        if (match) {
            return match[1]
        } else {
            return FALLBACK_IMAGE
        }
    } catch (error) {
        console.error("Error fetching image:", error)
        return FALLBACK_IMAGE
    }
}

const Post = ({ shuffled_posts }: { shuffled_posts: PostListProps }) => {
    return (
        <div
            className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg relative space-x-3"
            onClick={() => {
                window.open(shuffled_posts.link)
            }}
        >
            <div className="relative h-24 w-24 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                <Image
                    src={shuffled_posts.image || "/placeholder.svg"}
                    alt={React.Children.toArray(shuffled_posts.title).join("")}
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
                    onClick={(e) => {
                        e.stopPropagation()
                        window.open(`https://thescientry.blogspot.com/search/label/${shuffled_posts.category}`)
                    }}
                >
                    {shuffled_posts.category}
                </Badge>
                <div className="text-2xl line-clamp-2 break-words">{shuffled_posts.title}</div>
            </div>
        </div>
    )
}

const LoadingState = () => {
    return (
        <>
            {[...Array(2)].map((_, index) => (
                <div key={index} className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg relative space-x-3">
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
    )
}

const ErrorState = ({ error }: { error: string }) => {
    return (
        <div className="text-center text-red-500">
            <p>{`Error: ${error}`}</p>
        </div>
    )
}

function PostData({ globalCategory }: { globalCategory: string }) {
    const [posts, setPosts] = React.useState<PostListProps[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)
    const [error, setError] = React.useState<string | null>(null)
    React.useEffect(() => {
        setLoading(true)
        setError(null)
        let url = "https://thescientry.blogspot.com/feeds/posts/default?alt=json"
        if (globalCategory !== "latest-papers") {
            url = `https://thescientry.blogspot.com/feeds/posts/default/-/${globalCategory}?alt=json`
        }
        url = encodeURI(`https://proxy.wafflehacker.io?destination=${url}`);
        fetch(`https://proxy.wafflehacker.io?destination=${url}`)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    try {
                        const parsedData = data
                        if (parsedData.feed && Array.isArray(parsedData.feed.entry)) {
                            const entries: Entry[] = parsedData.feed.entry
                            const newPosts: PostListProps[] = entries
                                .filter((entry) => entry.category && entry.category.length > 0)
                                .map((entry) => ({
                                    title: <MathJax inline>{entry.title.$t}</MathJax>,
                                    category: entry.category.find((cat) => cat.term !== "ZZZZZZZZZ")?.term || "Uncategorized",
                                    link: entry.link.find((link) => link.rel === "alternate")?.href || "#",
                                    image: entry.content?.$t
                                        ? fetchImage(entry.content.$t)
                                        : "https://i.ibb.co/TBJqggw/Image-Not-Found.jpg",
                                }))
                            setPosts(newPosts.slice(0, 6))
                        } else {
                            setError("No valid entries found")
                        }
                    } catch (err) {
                        console.error("Error parsing data:", err)
                        setError("Error parsing data")
                    }
                } else {
                    setError("Invalid data received")
                }
            })
            .catch((err) => {
                console.error("Fetch error:", err)
                setError("Failed to fetch data")
            })
            .finally(() => setLoading(false))
    }, [globalCategory])
    if (loading) {
        return <LoadingState />
    }
    if (error) {
        return <ErrorState error={error} />
    }
    return (
        <>
            {posts.map((post, index) => (
                <Post key={index} shuffled_posts={post} />
            ))}
        </>
    )
}

export default function PostList({ category }: { category: string }) {
    const [selectedCategory, setSelectedCategory] = useState<string>(category)
    const formatCategoryName = (category: string) => {
        return category
            .replace(/-/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
    }
    const categories: string[] = [
        "Latest Papers",
        "Astrophysics",
        "Condensed Matter",
        "General Relativity and Quantum Cosmology",
        "High Energy Physics",
        "Mathematical Physics",
        "Nonlinear Sciences",
        "Nuclear Experiment",
        "Nuclear Theory",
        "Computer Science",
        "Mathematics",
        "Economics",
        "Quantitative Biology",
        "Quantitative Finance",
        "Quantum Physics",
        "Statistics",
        "Electrical Engineering and Systems Science",
        "Physics",
        "Health",
        "Science",
        "Biology",
        "Technology",
        "Earth",
        "Environment",
        "Nano-technology",
        "Society",
        "Astronomy & Space",
        "Chemistry",
    ]
    return (
        <section id={"latest-papers"} className="bg-secondary/20 py-10">
            <div className="text-center justify-center items-center flex flex-col space-y-3 mx-5">
                <div className="flex justify-between md:justify-around w-full items-center">
                    <div className="flex flex-col text-start space-y-2">
                        <h2 className="md:text-4xl text-2xl font-bold">{formatCategoryName(selectedCategory)}</h2>
                        <Select onValueChange={(value) => setSelectedCategory(value)}>
                            <SelectTrigger className="w-fit">
                                <SelectValue placeholder="Select Category&nbsp;&nbsp;&nbsp;" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((cat) => {
                                    const formattedCat = cat;
                                    return (
                                        <SelectItem key={formattedCat} value={formattedCat}>
                                            <p>{formattedCat}&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                        </SelectItem>
                                    );
                                })}
                            </SelectContent>
                        </Select>
                    </div>
                    <Button variant={"default"} onClick={() => window.open("https://thescientry.blogspot.com/")}>
                        View All
                    </Button>
                </div>
                <div className="pb-5 border-gray-700 border-b-2 w-2/6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 w-full">
                    <PostData globalCategory={selectedCategory} />
                </div>
            </div>
        </section >
    )
}
