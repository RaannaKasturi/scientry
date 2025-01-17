"use client";

import React from "react";
import { TagCloud } from "react-tagcloud";
import { Button } from "@/components/ui/button";
import UseBlogger from "use-blogger";

interface CategoryType {
    value: string;
    count: number;
}

export default function CategoriesCloud() {
    const [categories, setCategories] = React.useState<CategoryType[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        const blogURL = "http://papers.raannakasturi.eu.org/";
        const blogger = new UseBlogger({ blogUrl: blogURL, blogId: "7334486736883872826", isBrowser: true });
        const cat = blogger.labels();
        console.log(cat);

        fetch(
            `https://raannakasturi-rexplore-cors-proxy.hf.space/fetch-feed?url=https://thescientry.blogspot.com/feeds/posts/default?alt=json`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "ok") {
                    const rawCategories = JSON.parse(data.data).feed.category;
                    if (Array.isArray(rawCategories)) {
                        const shuffledCategories = rawCategories
                            .sort(() => 0.5 - Math.random())
                            .slice(0, 15)
                            .filter((category: { term: string }) => category.term !== "ZZZZZZZZZ")
                            .map((category: { term: string }) => ({
                                value: category.term,
                                count: Math.floor(Math.random() * 10) + 10,
                            }));

                        setCategories(shuffledCategories);
                    } else {
                        setError("No valid entries found.");
                    }
                } else {
                    setError("Failed to fetch categories.");
                }
            })
            .catch((err) => {
                setError("Error fetching data.");
                console.error(err);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <section id="categories" className="flex bg-neutral-900 text-white flex-col items-center space-y-3 py-20 px-5">
                <div className="flex justify-between md:justify-around w-full">
                    <h2 className="md:text-4xl text-xl font-bold">Top Categories</h2>
                    < Button variant={'default'} onClick={() => alert("View All Categories")} className="text-white">View All</Button>
                </div>
                <div className="pb-5 border-gray-700 border-b-2 w-2/6"></div>
                <TagCloud className="flex flex-wrap justify-center gap-x-3 items-center hover:cursor-wait"
                    minSize={20}
                    maxSize={35}
                    tags={[{ value: "Loading Categories... Please Wait", count: 10 }]}
                />
            </section>
        )
    }
    if (error) {
        return (
            <section id="categories" className="flex flex-col bg-neutral-900 text-white items-center space-y-3 py-20 px-5">
                <div className="flex justify-between md:justify-around w-full">
                    <h2 className="md:text-4xl text-xl font-bold">Top Categories</h2>
                    < Button variant={'default'} onClick={() => alert("View All Categories")} className="text-white">View All</Button>
                </div>
                <div className="pb-5 border-gray-700 border-b-2 w-2/6"></div>
                <TagCloud className="flex flex-wrap justify-center gap-x-3 items-center hover:cursor-wait"
                    minSize={20}
                    maxSize={35}
                    tags={[{ value: `Failed to Load Categories... ${error}`, count: 10 }]}
                />
            </section>
        )
    }
    if (categories.length === 0) {
        return (
            <section id="categories" className="flex flex-col bg-neutral-900 text-white items-center space-y-3 py-20 px-5">
                <div className="flex justify-between md:justify-around w-full">
                    <h2 className="md:text-4xl text-xl font-bold">Top Categories</h2>
                    < Button variant={'default'} onClick={() => alert("View All Categories")} className="text-white">View All</Button>
                </div>
                <div className="pb-5 border-gray-700 border-b-2 w-2/6"></div>
                <TagCloud className="flex flex-wrap justify-center gap-x-3 items-center hover:cursor-wait"
                    minSize={20}
                    maxSize={35}
                    tags={[{ value: "No Categories Found", count: 10 }]}
                />
            </section>
        )
    }
    return (
        <section id="categories" className="flex flex-col bg-neutral-900 text-white items-center space-y-5 md:space-y-10 py-20 px-5">
            <div className="flex justify-between md:justify-around w-full items-center">
                <h2 className="md:text-4xl text-2xl font-bold">Top Categories</h2>
                < Button variant={'default'} onClick={() => alert("View All Categories")} className="text-white">View All</Button>
            </div>
            <div className="border-gray-700 border-b-2 w-2/6"></div>
            <TagCloud className="flex flex-wrap justify-center md:gap-x-3 gap-0 items-center hover:cursor-pointer"
                minSize={20}
                maxSize={35}
                tags={categories}
                onClick={(tag) => alert(`'${tag.value}' was selected!`)}
            />
        </section>
    );
}
