"use client";

import { cn } from "@/lib/utils";
import {
    CloudDownloadIcon,
    ClipboardPenIcon,
    DatabaseIcon,
    AArrowDownIcon,
    ListTreeIcon,
    BookOpenCheckIcon,
    MessageSquareReplyIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Products() {
    const features = [
        {
            title: "Fetch Research Papers",
            description:
                "Fetch Research Papers from various sources using DOI",
            icon: < DatabaseIcon />,
            link: "/tools/doi",
        },
        {
            title: "Citation Generator",
            description:
                "Generate DOI-Based Citation in multiple formats",
            icon: < ClipboardPenIcon />,
            link: "/tools/doi",
        },
        {
            title: "Fetch Research Paper",
            description:
                "Fetch available Research Paper from DOI",
            icon: < CloudDownloadIcon />,
            link: "/tools/doi",
        },
        {
            title: "Research Paper Sumarizer",
            description: "Summarize Research Paper in a few words, with Highlights & Key Insights",
            icon: < AArrowDownIcon />,
            link: "/tools/doi",
        },
        {
            title: "Research Paper Mindmap Generator",
            description: "Generate Mindmap for Research Paper with ease",
            icon: < ListTreeIcon />,
            link: "/tools/doi",
        },
        {
            title: "Latest Research Papers",
            description:
                "Read the latest Research Papers with premad Summaries & Mindmaps, on the go",
            icon: < BookOpenCheckIcon />,
            link: "/tools/doi",
        },
        {
            title: "More to come",
            description:
                "How can we Improve? Send us your suggestion here",
            icon: < MessageSquareReplyIcon />,
            link: "/tools/doi",
            buttonText: "Suggest Features",
        },
    ];
    return (
        <section className="bg-secondary/20 py-10">
            <div className="text-center justify-center items-center flex flex-col space-y-3 mx-5">
                <div className="flex justify-between md:justify-around w-full items-center">
                    <div className="flex flex-col text-start space-y-2">
                        <h2 className="md:text-4xl text-2xl font-bold">Tools</h2>
                        <p className="text-xl text-secondary-foreground opacity-75"> Scientry offers a wide range of Tools and Services to help you with your research. Explore our services below. </p>
                    </div>
                    < Button variant={'default'} onClick={() => alert("Dashboard")}>Dashboard</Button>
                </div>
                <div className="pb-5 border-gray-700 border-b-2 w-2/6 "></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 pt-10 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index} />
                ))}
            </div>
        </section>
    );
}

const Feature = ({
    title,
    description,
    icon,
    link,
    buttonText,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    buttonText?: string;
    link?: string;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r w-full py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-200 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full md:bg-gradient-to-b bg-gradient-to-t from-neutral-200 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
            < Button variant="default" className="mt-4 mx-10 z-10 w-fit text-wrap" onClick={() => alert(link || "Learn More")}>{buttonText || title}</Button>
        </div>
    );
};