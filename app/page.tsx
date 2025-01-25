"use client";

import Hero from "@/components/front-page/hero";
import Products from "@/components/front-page/products";
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
          < Products />
          < PostList category="latest-papers" />
        </MathJax>
      </MathJaxContext>

    </div >
  )
}