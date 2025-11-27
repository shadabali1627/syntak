import { getBlogPosts } from "@/features/blog/actions";
import { BlogCard } from "@/features/blog/components/blog-card";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock } from "lucide-react";
import { urlFor } from "@/lib/sanity-image";

export default async function BlogPage() {
    // 1. Fetch data directly from Sanity (This runs on the server)
    const posts = await getBlogPosts();
    const featuredPost = posts[0]; // Assume the first post is featured
    const recentPosts = posts.slice(1);

    return (
        <div className="max-w-7xl mx-auto py-12 px-6">

            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                    The <span className="text-primary">Syntak</span> Blog
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Insights, tutorials, and updates from our team of engineers and designers.
                </p>
            </div>

            {/* Featured Post */}
            {featuredPost && (
                <div className="mb-20 animate-slide-up">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-primary pl-4">Featured Article</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl group">
                            {featuredPost.mainImage && (
                                <Image
                                    src={urlFor(featuredPost.mainImage).width(800).height(600).url()}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            )}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-4 text-sm font-bold mb-6 uppercase tracking-wider">
                                <span className="text-primary bg-primary/10 px-3 py-1 rounded-md">{featuredPost.category || "Featured"}</span>
                                <span className="text-gray-500 dark:text-gray-400 font-medium normal-case flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> {featuredPost.date}
                                </span>
                            </div>
                            <Link href={`/blog/${featuredPost.slug}`} className="group">
                                <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                                    {featuredPost.title}
                                </h3>
                            </Link>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed line-clamp-3">
                                {featuredPost.excerpt}
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center">
                                        <User className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="text-sm font-medium">
                                        <p className="text-gray-900 dark:text-white">{featuredPost.author}</p>
                                        <p className="text-gray-500 dark:text-gray-400">Author</p>
                                    </div>
                                </div>
                                <div className="h-8 w-px bg-gray-200 dark:bg-white/10" />
                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    <Clock className="w-4 h-4" /> {featuredPost.readTime || "5 min read"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Recent Posts Grid */}
            <div className="animate-slide-up [animation-delay:200ms]">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-primary pl-4">Recent Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>

        </div>
    );
}