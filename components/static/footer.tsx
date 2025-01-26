'use client';

import Image from "next/image";
import { SiBluesky, SiBlueskyHex, SiGithub, SiHuggingface, SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import { LinkedinIcon, MailIcon } from "lucide-react";
import { Separator } from "../ui/separator";

export default function Footer() {
    return (
        <section id="footer" className="h-full w-full flex items-center flex-col space-y-7 bg-white dark:bg-black text-secondary-foreground">
            <div className="flex md:flex-row flex-col md:justify-between justify-center mt-7 items-center space-x-20">
                <h2 className="font-bold text-2xl text-center my-1">Get connect with us on Social Networks</h2>
                <ul className="flex flex-row justify-evenly my-1 items-center space-x-5">
                    < SiInstagram onClick={() => { window.open("") }} />
                    < LinkedinIcon onClick={() => { window.open("") }} />
                    <  MailIcon onClick={() => { window.open("") }} />
                    < SiGithub onClick={() => { window.open("") }} />
                    < SiYoutube onClick={() => { window.open("") }} />
                    < SiHuggingface onClick={() => { window.open("") }} />
                    < SiBluesky onClick={() => { window.open("") }} />
                </ul>
            </div>
            < Separator orientation={'horizontal'} className="bg-secondary-foreground w-10/12 my-4" />
            <div className="grid grid-cols-4 gap-5">
                <div className="scientry flex flex-col items-center border border-black">
                    <Image src="/scott-graham-5fNmWej4tAA-unsplash.jpg" alt="Scientry" width={100} height={100} />
                </div>
                <div>hello</div>
            </div>
        </section>
    )
}