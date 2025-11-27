import Link from "next/link";
import { Plus, MoreHorizontal, FileText, Calendar } from "lucide-react";
import { getAdminPosts } from "@/features/blog/actions";
import { SearchInput } from "@/components/ui/search-input";

export default async function ContentPage({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) {
    const query = searchParams?.query || "";
    // 1. Fetch REAL data from Sanity
    const posts = await getAdminPosts(query);

    return (
        <div className="space-y-6">

            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Content</h1>
                    <p className="text-gray-400 mt-1">Manage your blog posts and guides.</p>
                </div>

                {/* Link to the Sanity Studio Editor */}
                <Link
                    href="/studio/structure/post"
                    target="_blank"
                    className="flex items-center gap-2 bg-primary text-[#1e0b36] px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
                >
                    <Plus className="w-4 h-4" /> Create New
                </Link>
            </div>

            {/* Search & Filter Bar */}
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="relative flex-1">
                    <SearchInput />
                </div>
                <select className="bg-[#0d041c] border border-white/10 rounded-lg px-4 py-2 text-sm text-gray-300 focus:outline-none">
                    <option>All Status</option>
                    <option>Published</option>
                    <option>Draft</option>
                </select>
            </div>

            {/* The Data Table */}
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10 text-xs text-gray-400 uppercase tracking-wider bg-white/5">
                            <th className="p-4 font-medium">Article Title</th>
                            <th className="p-4 font-medium">Status</th>
                            <th className="p-4 font-medium">Stats (Est.)</th>
                            <th className="p-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {posts.map((post: any) => (
                            <tr key={post.id} className="hover:bg-white/5 transition-colors group">
                                <td className="p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded bg-white/5 text-primary">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-white">{post.title}</div>
                                            <div className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                                                <Calendar className="w-3 h-3" /> {post.date}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${post.status === "Published" ? "bg-green-500/10 text-green-400 border-green-500/20" :
                                        "bg-gray-500/10 text-gray-400 border-gray-500/20"
                                        }`}>
                                        {post.status}
                                    </span>
                                </td>
                                <td className="p-4 text-gray-300 text-sm">
                                    {post.views.toLocaleString()} views
                                </td>
                                <td className="p-4 text-right">
                                    {/* Link to Edit the specific post in Studio */}
                                    <Link href={`/studio/structure/post/${post.id}`} target="_blank">
                                        <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}

                        {/* Show message if no posts exist */}
                        {posts.length === 0 && (
                            <tr>
                                <td colSpan={4} className="p-8 text-center text-gray-500">
                                    No posts found. Click "Create New" to write your first article.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}