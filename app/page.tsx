"use client";

import CategoryCloud from "@/components/front-page/category-cloud";
import Hero from "@/components/front-page/hero";
import Products from "@/components/front-page/products";
import PostList from "@/components/static/post-list";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      < CategoryCloud />
      < Products />
      < PostList category="Front Page" />
    </div>
  )
}