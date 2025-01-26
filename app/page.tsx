"use client";

import Call2Action from "@/components/front-page/cta";
import Features from "@/components/front-page/features";
import Hero from "@/components/front-page/hero";
import PostList from "@/components/static/post-list";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
  loader: { load: ["[tex]/html"] },
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <MathJaxContext version={3} config={config}>
        <MathJax hideUntilTypeset={"first"}>
          < Hero />
          < Features />
          < PostList category="latest-papers" />
          < Call2Action />
        </MathJax>
      </MathJaxContext>

    </div >
  )
}