"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { BrainCircuitIcon } from "lucide-react";

export default function Hero() {
    const placeholders = [
        "10.48550/ARXIV.2501.06191",
        "10.1038/s41467-024-54838-2",
        "10.1371/journal.pbio.3002907",
        "10.1126/sciadv.ads3688",
        "10.1371/journal.pcbi.1012664",
    ];
    let DOI: string = "";
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        DOI = e.target.value;
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(DOI);
    };
    return (
        <section className="bg-secondary h-dvh w-full flex flex-col items-center justify-center relative">
            <BackgroundGradientAnimation className="absolute flex flex-col items-center justify-center h-full w-full">
                <div className="md:pb-8 pb-5 z-10 inset-0 flex space-x-3 items-center justify-center text-white font-bold px-4 pointer-events-none text-4xl text-center md:text-6xl lg:text-7xl"> < BrainCircuitIcon size={60} className="inline-flex" /> <p>Scientry</p> </div>
                <div className="z-10 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-none text-2xl text-center md:text-3xl lg:text-5xl">
                    <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white via-white/75 to-white/20">
                        Science Simplified,
                    </p>
                    <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white via-white/75 to-white/20">
                        Knowledge Amplified
                    </p>
                </div>
                <div className="z-10 py-10 inset-0 w-full flex flex-col items-center justify-center text-white font-bold px-4 text-lg text-center md:text-xl lg:text-2xl">
                    <h4 className="text-lg mb-2 md:mb-4">Search for Research Paper Here</h4>
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </div>
            </BackgroundGradientAnimation>
        </section>
    );
}
