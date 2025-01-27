"use client";

import { Button } from "../ui/button";
import { ChevronRightIcon, ChevronsRightIcon, ClipboardPenLineIcon, LightbulbIcon, ListTreeIcon, Minimize2Icon, NewspaperIcon, RssIcon } from "lucide-react"
import { Separator } from "../ui/separator";
import Link from "next/link";

export default function Features() {
    return (
        <section id="features" className="bg-secondary py-16 flex flex-col items-center">
            <h2 className="md:text-4xl text-2xl font-bold text-center pb-1">Explore our Features</h2>
            < Separator orientation={'horizontal'} className="bg-primary mb-12 w-5/12" />
            <div className="mx-5 md:mx-36 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col justify-between duration-300 bg-secondary-foreground/10 p-5 rounded-lg group group">
                    <div>
                        <h3 className="text-xl font-bold flex flex-row  items-center"> < NewspaperIcon className="inline mr-2" /> Paper Fetcher</h3>
                        < Separator orientation="horizontal" className="mt-2 mb-3 bg-primary w-3/5 group-hover:w-full transition-all duration-700" />
                        <div dangerouslySetInnerHTML={{ '__html': "<p>Our <b>Scientry's Paper Fetcher</b> can fetch almost any research paper for you. Just give us the DOI URL or ID of the paper and we will fetch it for you.</p>" }}></div>
                    </div>
                    < Link href={'#'} >
                        <Button variant={'outline'} className="bg-transparent border rounded-full w-fit group-hover:scale-105 transition-all duration-300 border-secondary-foreground group hover:border-primary hover:bg-secondary hover:text-primary mt-5">Fetch Papers <ChevronRightIcon className="group-hover:hidden flex" /> <ChevronsRightIcon className="group-hover:flex hidden" />  </Button>
                    </Link>
                </div >
                <div className="flex flex-col justify-between duration-300 bg-secondary-foreground/10 p-5 rounded-lg group">
                    <div>
                        <h3 className="text-xl font-bold flex flex-row  items-center"> < ClipboardPenLineIcon className="inline mr-2" /> Citation Generator</h3>
                        < Separator orientation="horizontal" className="mt-2 mb-3 bg-primary w-3/5 group-hover:w-full transition-all duration-700" />
                        <div dangerouslySetInnerHTML={{ '__html': "<p>Our <b>Scientry's Citation Generator</b> can generate citation of any research paper with a valid DOI ID or URL in seconds. It can generate citations in not one or two formats but in over than over a 100 different formats.</p>" }}></div>
                    </div>
                    < Link href={'#'} >
                        <Button variant={'outline'} className="bg-transparent border rounded-full w-fit group-hover:scale-105 transition-all duration-300 border-secondary-foreground group hover:border-primary hover:bg-secondary hover:text-primary mt-5">Generate Citations <ChevronRightIcon className="group-hover:hidden flex" /> <ChevronsRightIcon className="group-hover:flex hidden" />  </Button>
                    </Link>
                </div>
                <div className="flex flex-col justify-between duration-300 bg-secondary-foreground/10 p-5 rounded-lg group">
                    <div>
                        <h3 className="text-xl font-bold flex flex-row  items-center"> < Minimize2Icon className="inline mr-2" /> Summary Generator</h3>
                        < Separator orientation="horizontal" className="mt-2 mb-3 bg-primary w-3/5 group-hover:w-full transition-all duration-700" />
                        <div dangerouslySetInnerHTML={{ '__html': "<p>Our <b>Scientry's Summary Generator</b> can generate summary of any research paper with a valid DOI ID or URL in seconds no matter the length of the research paper. It can accurate and well-formatted summaries of research papers.</p>" }}></div>
                    </div>
                    < Link href={'#'} >
                        <Button variant={'outline'} className="bg-transparent border rounded-full w-fit group-hover:scale-105 transition-all duration-300 border-secondary-foreground group hover:border-primary hover:bg-secondary hover:text-primary mt-5">Summarize Paper <ChevronRightIcon className="group-hover:hidden flex" /> <ChevronsRightIcon className="group-hover:flex hidden" />  </Button>
                    </Link>
                </div>
                <div className="flex flex-col justify-between duration-300 bg-secondary-foreground/10 p-5 rounded-lg group">
                    <div>
                        <h3 className="text-xl font-bold flex flex-row  items-center"> < ListTreeIcon className="inline mr-2" /> Mindmap Generator</h3>
                        < Separator orientation="horizontal" className="mt-2 mb-3 bg-primary w-3/5 group-hover:w-full transition-all duration-700" />
                        <div dangerouslySetInnerHTML={{ '__html': "<p>Our <b>Scientry's Mindmap Generator</b> has the ability to generate accurate and precise mindmaps of any research paper with a valid DOI ID or URL in seconds.</p>" }}></div>
                    </div>
                    < Link href={'#'} >
                        <Button variant={'outline'} className="bg-transparent border rounded-full w-fit group-hover:scale-105 transition-all duration-300 border-secondary-foreground group hover:border-primary hover:bg-secondary hover:text-primary mt-5">Generate Mindmaps <ChevronRightIcon className="group-hover:hidden flex" /> <ChevronsRightIcon className="group-hover:flex hidden" />  </Button>
                    </Link>
                </div>
                <div className="flex flex-col justify-between duration-300 bg-secondary-foreground/10 p-5 rounded-lg group">
                    <div>
                        <h3 className="text-xl font-bold flex flex-row  items-center"> < RssIcon className="inline mr-2" /> Research Bulletin</h3>
                        < Separator orientation="horizontal" className="mt-2 mb-3 bg-primary w-3/5 group-hover:w-full transition-all duration-700" />
                        <div dangerouslySetInnerHTML={{ '__html': "<p>Our <b>Scientry's Research Bulletin</b> provides key insights of the latest research across the globe at one place without any hustle to keep you updated on the go.</p>" }}></div>
                    </div>
                    < Link href={'https://thescientry.blogspot.com/'} target={'_blank'} rel={'noreferrer noopener'}>
                        <Button variant={'outline'} className="bg-transparent border rounded-full w-fit group-hover:scale-105 transition-all duration-300 border-secondary-foreground group hover:border-primary hover:bg-secondary hover:text-primary mt-5">Latest Research <ChevronRightIcon className="group-hover:hidden flex" /> <ChevronsRightIcon className="group-hover:flex hidden" />  </Button>
                    </Link>
                </div>
                <div className="flex flex-col justify-between duration-300 bg-secondary-foreground/10 p-5 rounded-lg group">
                    <div>
                        <h3 className="text-xl font-bold flex flex-row  items-center"> < LightbulbIcon className="inline mr-2" /> Have Suggestions?</h3>
                        < Separator orientation="horizontal" className="mt-2 mb-3 bg-primary w-3/5 group-hover:w-full transition-all duration-700" />
                        <div dangerouslySetInnerHTML={{ '__html': "<p>We at <b>Scientry</b> are ready to help you with all your research needs. Need a specialized tool for your research or suggest a feature to us  or just a feedback of your service. We welcome you.</p>" }}></div>
                    </div>
                    < Link href={'#'} >
                        <Button variant={'outline'} className="bg-transparent border rounded-full w-fit group-hover:scale-105 transition-all duration-300 border-secondary-foreground group hover:border-primary hover:bg-secondary hover:text-primary mt-5">Drop a Message <ChevronRightIcon className="group-hover:hidden flex" /> <ChevronsRightIcon className="group-hover:flex hidden" />  </Button>
                    </Link>
                </div>
            </div >
        </section >
    )
}