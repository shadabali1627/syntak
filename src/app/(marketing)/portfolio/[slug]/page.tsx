import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/features/portfolio/actions";
import { urlFor } from "@/lib/sanity-image";
import { Metadata } from "next";

export const revalidate = 60;

export async function generateStaticParams() {
    const slugs = await getAllProjectSlugs();
    return slugs.map((slug: { slug: string }) => ({
        slug: slug.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const decodedSlug = decodeURIComponent(params.slug);
    const project = await getProjectBySlug(decodedSlug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const decodedSlug = decodeURIComponent(params.slug);
    console.log("ProjectPage params.slug:", params.slug);
    console.log("ProjectPage decodedSlug:", decodedSlug);

    const project = await getProjectBySlug(decodedSlug);

    if (!project) {
        console.log("ProjectPage: Project not found for slug:", decodedSlug);
        return notFound();
    }

    return (
        <div className="min-h-screen bg-[#050A18] py-20 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <article className="max-w-5xl mx-auto relative z-10 animate-fade-in">

                {/* Back Button */}
                <Link
                    href="/portfolio"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-blue-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <span className={`text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${project.gradient || 'from-blue-500 to-purple-500'} bg-clip-text text-transparent`}>
                            {project.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {project.title}
                    </h1>
                </header>

                {/* Main Image */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12">
                    <Image
                        src={urlFor(project.image).url()}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Content */}
                    <div className="lg:col-span-2 prose prose-lg prose-invert max-w-none">
                        <p className="text-xl text-gray-300 leading-relaxed mb-8">
                            {project.description}
                        </p>
                        {/* If you have a rich text body for projects, render it here using PortableText */}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Actions */}
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-lg shadow-blue-500/25"
                            >
                                Visit Live Site <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        )}

                        {/* Tags */}
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <h3 className="text-lg font-bold text-white mb-4">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags?.map((tag: string, i: number) => (
                                    <span key={i} className="text-sm font-medium text-gray-300 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </article>
        </div>
    );
}
