import { getBlogPosts } from "@/features/blog/actions";
import { BlogCard } from "@/features/blog/components/blog-card";

export default async function BlogPage() {
    // 1. Fetch data directly from Sanity (This runs on the server)
    const posts = await getBlogPosts();

    return (
        <div className="max-w-6xl mx-auto py-12">

            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    The <span className="text-primary">Syntak</span> Blog
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Fresh content directly from our Sanity Studio.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 2. Map through the REAL posts */}
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>

        </div>
    );
}