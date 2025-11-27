import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import type { BlogPost } from "../types"; // Imports the interface from the folder above

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <article className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
            <div className="p-8 flex flex-col h-full">

                {/* Top Meta: Category & Date */}
                <div className="flex items-center gap-4 text-xs font-semibold mb-4 uppercase tracking-wider">
                    <span className="text-primary">{post.category || "General"}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-gray-400 font-normal normal-case flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 flex-1 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                </p>

                {/* Footer: Author & Read Time */}
                <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                            <User className="w-3 h-3 text-primary" />
                        </div>
                        {post.author}
                    </div>

                    {post.readTime && (
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                        </div>
                    )}
                </div>

            </div>
        </article>
    );
}