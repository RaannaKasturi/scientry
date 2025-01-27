"use client";

import { ArrowUpIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function BackToTop() {
    return (
        <Button
            variant={'outline'}
            size={'icon'}
            className="md:h-12 md:w-12 h-10 w-10 fixed hover:md:px-5 hover:px-3 ring-offset-white ring-white ring-1 bottom-5 right-5 md:bottom-10 md:right-10 p-2 rounded-full hover:w-fit hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white duration-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            onMouseEnter={() => {
                setTimeout(() => {
                    document.querySelector(".back-to-top")?.classList.remove("hidden");
                    document.querySelector(".back-to-top")?.classList.add("flex");
                }, 500)
            }}
            onMouseLeave={() => {
                document.querySelector(".back-to-top")?.classList.add("hidden");
                document.querySelector(".back-to-top")?.classList.remove("flex");
            }}
        >
            < ArrowUpIcon className="md:scale-150 scale-110" />
            <p id="back-to-top" className="hidden back-to-top md:text-lg">
                Back to Top
            </p>
        </Button>
    )
}