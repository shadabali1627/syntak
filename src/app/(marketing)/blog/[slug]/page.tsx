import Link from "next/link";
import Image from "next/image"; // <--- Import Image Component
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/features/blog/actions";
import { PortableText } from "@portabletext/react";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    // 1. Fetch the REAL post from Sanity
    const post = await getBlogPostBySlug(params.slug);

    // 2. If it doesn't exist in Sanity, show 404
    if (!post) {
        return notFound();
    }

    return (
        <article className="max-w-3xl mx-auto py-12 px-6">

            {/* Back Button */}
            <Link
                href="/blog"
                className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors mb-8"
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-10">

                {/* Meta Info (Date & Author) */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-primary">
                        <User className="w-4 h-4" /> {post.author || "Syntak Team"}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                    {post.title}
                </h1>

                {/* NEW: Cover Image */}
                {post.imageUrl && (
                    <div className="relative w-full h-64 md:h-96 mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
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
            <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                <PortableText value={post.body} />
            </div>

        </article>
    );
}