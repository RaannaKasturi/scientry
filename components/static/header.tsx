"use client";

import { Button } from "@/components/ui/button";
import { BrainCircuitIcon, Menu, SunMoonIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";
import { useRouter } from "nextjs-toploader/app";
import Link from "next/link";

export default function Header() {
    const { setTheme } = useTheme()
    const router = useRouter()
    return (
        <section id="header" className="fixed w-full bg-white dark:bg-black text-secondary-foreground flex flex-col py-3 md:px-0 px-5 items-center navbar z-50">
            <div className="flex flex-row w-full md:justify-around justify-between items-center space-x-3">
                <div className="md:text-3xl text-2xl fw-bold navbar-brand cursor-pointer" onClick={() => { router.push('/') }}> < BrainCircuitIcon className="inline-flex" /> Scientry</div>
                <ul className="navbar-nav navbar hidden md:flex flex-row justify-between items-center space-x-3">
                    <Link href="/" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-center p-2 rounded" >
                        <li>Home</li>
                    </Link>
                    <Link href="/about" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-center p-2 rounded" >
                        <li>About</li>
                    </Link>
                    <Link href="/#features" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-center p-2 rounded" >
                        <li>Features</li>
                    </Link>
                    <Link href="https://thescientry.blogspot.com/" target="_blank" rel="noreferrer noopener" className="navbar nav-link text-nowrap cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-center p-2 rounded" >
                        <li>Research Bulletin</li>
                    </Link>
                </ul>
                <div className="flex flex-row justify-between items-center space-x-3">
                    < Button variant={'outline'} size={'icon'} className="navbar border-2 border-primary" onClick={() => setTheme(theme => theme === 'dark' ? 'light' : 'dark')} >< SunMoonIcon /></Button>
                    < Button variant={'outline'} className="navbar border-2 border-primary hidden md:flex" >Get Started</Button>
                    < Sheet>
                        < SheetTrigger asChild >
                            < Button variant={'outline'} size={'icon'} className="navbar border-2 border-primary flex md:hidden" >< Menu /></Button>
                        </SheetTrigger>
                        < SheetContent className="flex flex-col justify-between w-2/3" >
                            < SheetHeader className="text-start space-y-0" >
                                < SheetTitle className="text-2xl">Scientry</SheetTitle>
                                < SheetDescription className="pb-3">Science Simplified, Knowledge Amplified</SheetDescription>
                                <Separator orientation={'horizontal'} />
                                <ul className="navbar-nav navbar flex flex-col justify-between items-start pt-5">
                                    <Link href="/" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-end pr-5 p-2 rounded" >
                                        <li>Home</li>
                                    </Link>
                                    <Link href="/about" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-end pr-5 p-2 rounded" >
                                        <li>About</li>
                                    </Link>
                                    <Link href="#features" scroll={false} className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-end pr-5 p-2 rounded" >
                                        <li>Features</li>
                                    </Link>
                                    <Link href="https://thescientry.blogspot.com/" target="_blank" rel="noreferrer noopener" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-end pr-5 p-2 rounded" >
                                        <li>Research Bulletin</li>
                                    </Link>
                                </ul>
                            </SheetHeader>
                            < SheetFooter className="flex flex-col justify-between items-center -space-y-1">
                                <Separator orientation={'horizontal'} className="mb-3" />
                                Designed and Developed by
                                <br />
                                <a className="text-primary cursor-pointer hover:underline underline-offset-2" href="http://nayankasturi.eu.org" target="_blank" rel="noopener noreferrer">
                                    Nayan Kasturi
                                </a>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </section>
    );
}
