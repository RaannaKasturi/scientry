'use client';

import { SiBluesky, SiGithub, SiHuggingface, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { BrainCircuitIcon, ChevronsRightIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

export default function Footer() {
    const router = useRouter()
    return (
        <section id="footer" className="h-full w-full flex items-center py-10 flex-col space-y-7 bg-white dark:bg-black text-secondary-foreground">
            <div className="flex md:flex-row flex-col md:justify-between justify-center items-center md:space-x-20">
                <h2 className="font-bold text-2xl text-center my-1">Get connect on Social Networks</h2>
                <ul className="flex flex-row justify-center my-2 items-center space-x-5">
                    <Link className="hover:text-primary" href={"https://github.com/RaannaKasturi"} target="_blank" rel="noopener noreferrer">< SiGithub /></Link>
                    <Link className="hover:text-primary" href={"https://www.linkedin.com/in/raannakasturi"} target="_blank" rel="noopener noreferrer">< LinkedinIcon /></Link>
                    <Link className="hover:text-primary" href={"https://instagram.com/RaannaKasturi"} target="_blank" rel="noopener noreferrer">< SiInstagram /></Link>
                    <Link className="hover:text-primary" href={"mailto:RaannaKasturi@gmail.com"} target="_blank" rel="noopener noreferrer">< MailIcon /></Link>
                    <Link className="hover:text-primary" href={"https://www.youtube.com/@RaannaKasturi?sub_confirmation=1"} target="_blank" rel="noopener noreferrer">< SiYoutube /></Link>
                    <Link className="hover:text-primary" href={"https://huggingface.co/RaannaKasturi"} target="_blank" rel="noopener noreferrer">< SiHuggingface /></Link>
                    <Link className="hover:text-primary" href={"http://raannakasturi.bsky.social/"} target="_blank" rel="noopener noreferrer">< SiBluesky /></Link>
                </ul>
            </div>
            < Separator orientation={'horizontal'} className="bg-secondary-foreground w-10/12 my-4" />
            <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mx-5">
                <div className="flex flex-col justify-start items-start space-y-2 md:pr-10">
                    <h2 className="md:text-3xl text-2xl fw-bold cursor-pointer" onClick={() => { router.push('/') }}> < BrainCircuitIcon className=" inline-flex" />  Scientry</h2>
                    < Separator orientation={'horizontal'} className="bg-secondary-foreground w-8/12 my-4" />
                    <p>Scientry makes the latest scientific research accessible to all. With clear summaries, detailed insights, and interactive mind maps, it brings you the world’s newest discoveries without the need for extensive reading. It’s science, simplified and right at your fingertips.</p>
                </div>
                <div className="flex flex-col justify-start items-start space-y-2">
                    <h2 className="md:text-3xl text-2xl fw-bold"> Features & Tools </h2>
                    < Separator orientation={'horizontal'} className="bg-secondary-foreground w-8/12 my-4" />
                    <ul className="flex flex-col justify-start items-start space-y-3 pt-2">
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Paper Fetcher < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Citation Generator < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Summary Generator < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Mindmap Generator < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href={'https://thescientry.blogspot.com/'} rel="noreferrer noopener" target={'_blank'} ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Research Bulletin < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Send Suggestions < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                    </ul>
                </div>
                <div className="flex flex-col justify-start items-start space-y-2">
                    <h2 className="md:text-3xl text-2xl fw-bold"> Important Links </h2>
                    < Separator orientation={'horizontal'} className="bg-secondary-foreground w-8/12 my-4" />
                    <ul className="flex flex-col justify-start items-start space-y-3 pt-2">
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Home < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   About < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Contact < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href={'https://thescientry.blogspot.com/'} rel="noreferrer noopener" target={'_blank'} ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Research Bulletin < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Android App < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Paper Requests < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Drop us a Message < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Privacy Policy < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                        < Link href="/features" ><li className="cursor-pointer group hover:underline hover:text-primary underline-offset-2">•   Cookie Policy < ChevronsRightIcon className=" group-hover:inline-flex hidden p-1" /></li></Link>
                    </ul>
                </div>
            </div>
            < Separator orientation={'horizontal'} className="bg-secondary-foreground w-full my-4" />
            <div className="flex md:flex-row w-full md:px-20 flex-col md:justify-between justify-center items-center md:space-x-20">
                <p>&copy; 2024 <Link href={'/'}><strong className="hover:cursor-pointer">Scientry</strong></Link>. All Rights Reserved.</p>
                <p>Designed and Developed by <Link href={'https://nayankasturi.eu.org'} target={'_blank'} rel={'noreferrer noopener'}><strong className="hover:cursor-pointer">Nayan Kasturi</strong></Link>.</p>
            </div>
        </section>
    )
}