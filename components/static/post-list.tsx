"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface PostListProps {
    category?: string;
}

export default function PostList({ category }: PostListProps) {
    return (
        <section id={'latest-papers'} className="bg-secondary/20 py-10">
            <div className="text-center justify-center items-center flex flex-col space-y-3 mx-5">
                {/* Header Section */}
                <div className="flex justify-between md:justify-around w-full items-center">
                    <div className="flex flex-col text-start space-y-2">
                        <h2 className="md:text-4xl text-2xl font-bold">Latest Papers</h2>
                        <p className="text-xl text-secondary-foreground opacity-75"> View all recently added Research Papers </p>
                    </div>
                    <Button variant={'default'} onClick={() => alert("View All")}>View All</Button>
                </div>
                <div className="pb-5 border-gray-700 border-b-2 w-2/6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-5 w-full">
                    <div className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg relative space-x-3"
                        onClick={() => { alert('Post'); }}
                    >
                        <div className="relative h-24 w-24 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src="https://i.ibb.co/YPvgbCG/a41eb29daab8.jpg"
                                alt="title"
                                objectFit="cover"
                                objectPosition="center"
                                fill={true}
                                className="group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col flex-grow text-start space-y-2">
                            <Badge variant={'default'} className="w-fit" onClick={() => { alert('Category'); }}>
                                {category}
                            </Badge>
                            <div className="text-2xl line-clamp-2 break-words">
                                Title kjshdbvdcsmkx, evgbdhcnjsmx gerfydu grhufeoid gtrnfoicmdp rgfedc efduns
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg relative space-x-3"
                        onClick={() => { alert('Post'); }}
                    >
                        <div className="relative h-24 w-24 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src="https://i.ibb.co/YPvgbCG/a41eb29daab8.jpg"
                                alt="title"
                                objectFit="cover"
                                objectPosition="center"
                                fill={true}
                                className="group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col flex-grow text-start space-y-2">
                            <Badge variant={'default'} className="w-fit" onClick={() => { alert('Category'); }}>
                                {category}
                            </Badge>
                            <div className="text-2xl line-clamp-2 break-words">
                                Title kjshdbvdcsmkx, evgbdhcnjsmx gerfydu grhufeoid gtrnfoicmdp rgfedc efduns
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg relative space-x-3"
                        onClick={() => { alert('Post'); }}
                    >
                        <div className="relative h-24 w-24 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src="https://i.ibb.co/YPvgbCG/a41eb29daab8.jpg"
                                alt="title"
                                objectFit="cover"
                                objectPosition="center"
                                fill={true}
                                className="group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col flex-grow text-start space-y-2">
                            <Badge variant={'default'} className="w-fit" onClick={() => { alert('Category'); }}>
                                {category}
                            </Badge>
                            <div className="text-2xl line-clamp-2 break-words">
                                Title kjshdbvdcsmkx, evgbdhcnjsmx gerfydu grhufeoid gtrnfoicmdp rgfedc efduns
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg relative space-x-3"
                        onClick={() => { alert('Post'); }}
                    >
                        <div className="relative h-24 w-24 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src="https://i.ibb.co/YPvgbCG/a41eb29daab8.jpg"
                                alt="title"
                                objectFit="cover"
                                objectPosition="center"
                                fill={true}
                                className="group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col flex-grow text-start space-y-2">
                            <Badge variant={'default'} className="w-fit" onClick={() => { alert('Category'); }}>
                                {category}
                            </Badge>
                            <div className="text-2xl line-clamp-2 break-words">
                                Title kjshdbvdcsmkx, evgbdhcnjsmx gerfydu grhufeoid gtrnfoicmdp rgfedc efduns
                            </div>
                        </div>
                    </div>
                    <div className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg relative space-x-3"
                        onClick={() => { alert('Post'); }}
                    >
                        <div className="relative h-24 w-24 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                                src="https://i.ibb.co/YPvgbCG/a41eb29daab8.jpg"
                                alt="title"
                                objectFit="cover"
                                objectPosition="center"
                                fill={true}
                                className="group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="flex flex-col flex-grow text-start space-y-2">
                            <Badge variant={'default'} className="w-fit" onClick={() => { alert('Category'); }}>
                                {category}
                            </Badge>
                            <div className="text-2xl line-clamp-2 break-words">
                                Title kjshdbvdcsmkx, evgbdhcnjsmx gerfydu grhufeoid gtrnfoicmdp rgfedc efduns
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
