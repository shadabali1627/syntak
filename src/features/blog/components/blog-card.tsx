import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import type { BlogPost } from "../types"; // Imports the interface from the folder above
import { urlFor } from "@/lib/sanity-image";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="group flex flex-col h-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            {/* Image */}
            {post.mainImage && (
                <div className="relative w-full h-56 overflow-hidden">
                    <Image
                        src={urlFor(post.mainImage).width(600).height(350).url()}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            )}

            <div className="p-8 flex flex-col h-full">

                {/* Top Meta: Category & Date */}
                <div className="flex items-center gap-4 text-xs font-bold mb-4 uppercase tracking-wider">
                    <span className="text-primary bg-primary/10 px-2 py-1 rounded-md">{post.category || "General"}</span>
                    <span className="text-gray-500 dark:text-gray-400 font-medium normal-case flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {post.title}
                    </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                </p>

                {/* Footer: Author & Read Time */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/10 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                            <User className="w-4 h-4 text-primary" />
                        </div>
                        {post.author}
                    </div>

                    {post.readTime && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium bg-gray-50 dark:bg-white/5 px-2 py-1 rounded-md">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                        </div>
                    )}
                </div>

            </div>
        </article>
    );
}