import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllPostSlugs } from "@/features/blog/actions";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import { BlogCard } from "@/features/blog/components/blog-card";

export const revalidate = 60;

export async function generateStaticParams() {
    const slugs = await getAllPostSlugs();
    return slugs.map((slug: { slug: string }) => ({
        slug: slug.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt || post.title,
        openGraph: {
            images: post.imageUrl ? [post.imageUrl] : [],
        },
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    // 1. Fetch the REAL post from Sanity
    const post = await getBlogPostBySlug(params.slug);

    // 2. If it doesn't exist in Sanity, show 404
    if (!post) {
        return notFound();
    }

    return (
        <article className="max-w-3xl mx-auto py-12 px-6 animate-fade-in">

            {/* Back Button */}
            <Link
                href="/blog"
                className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors mb-8 group"
            >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-10">

                {/* Meta Info (Date & Author) */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
                    <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-primary bg-primary/10 px-3 py-1 rounded-full">
                        <User className="w-3.5 h-3.5" /> {post.author || "Syntak Team"}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
                    {post.title}
                </h1>

                {/* NEW: Cover Image */}
                {post.imageUrl && (
                    <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
                        <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

            </header>

            {/* Content Area - Renders the rich text from Sanity */}
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert mb-20 prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl">
                <PortableText value={post.body} />
            </div>

            {/* Related Posts */}
            {post.relatedPosts && post.relatedPosts.length > 0 && (
                <div className="border-t border-gray-200 dark:border-white/10 pt-12 animate-slide-up">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {post.relatedPosts.map((relatedPost: any) => (
                            <BlogCard key={relatedPost.slug} post={relatedPost} />
                        ))}
                    </div>
                </div>
            )}

        </article>
    );
}