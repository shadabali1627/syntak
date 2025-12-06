"use client";

import { useState } from "react";
import { BlogCard } from "./blog-card";
import { ArrowDown } from "lucide-react";

interface RecentPostsGridProps {
    posts: any[];
}

export function RecentPostsGrid({ posts }: RecentPostsGridProps) {
    const [visibleCount, setVisibleCount] = useState(3);

    const visiblePosts = posts.slice(0, visibleCount);
    const hasMore = visibleCount < posts.length;

    const handleSeeMore = () => {
        setVisibleCount((prev) => prev + 6); // Load 6 more at a time
    };

    return (
        <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visiblePosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>

            {hasMore && (
                <div className="flex justify-center">
                    <button
                        onClick={handleSeeMore}
                        className="group flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all hover:scale-105"
                    >
                        See More <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>
            )}
        </div>
    );
}
