import { getBlogPosts } from "@/features/blog/actions";
import { RecentPostsGrid } from "@/features/blog/components/recent-posts-grid";

export default async function BlogPage() {
    // 1. Fetch data directly from Sanity (This runs on the server)
    const posts = await getBlogPosts();

    return (
        <div className="min-h-screen bg-[#050A18] py-20 px-6 relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Syntak</span> Blog
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Insights, tutorials, and updates from our team of engineers and designers.
                    </p>
                </div>

                {/* Recent Posts Grid */}
                <div className="animate-slide-up [animation-delay:200ms]">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-8 w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                        <h2 className="text-2xl font-bold text-white">Recent Articles</h2>
                    </div>

                    <RecentPostsGrid posts={posts} />
                </div>

            </div>
        </div>
    );
}