import { ArrowUpRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getProjects } from "@/features/portfolio/actions";
import { urlFor } from "@/lib/sanity-image";

export const revalidate = 60;

export default async function PortfolioPage() {
    const projects = await getProjects();

    return (
        <div className="min-h-screen bg-[#050A18] py-20 px-6 relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Portfolio</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A showcase of our best work. We build products that solve real problems and drive growth.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-slide-up [animation-delay:200ms]">
                    {projects.length > 0 ? (
                        projects.map((project: any, index: number) => (
                            <div
                                key={index}
                                className="group relative rounded-3xl overflow-hidden bg-[#0B1221]/80 backdrop-blur-sm border border-white/5 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Image Container */}
                                <div className="relative h-[350px] w-full overflow-hidden">
                                    <Image
                                        src={urlFor(project.image).url()}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A18] via-transparent to-transparent opacity-80" />

                                    {/* Overlay Content */}
                                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <Link href={`/portfolio/${project.slug}`} className="w-full py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/20 transition-colors">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 relative">
                                    {/* Gradient Border Top */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient || 'from-blue-500 to-purple-500'} opacity-50`} />

                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${project.gradient || 'from-blue-500 to-purple-500'} bg-clip-text text-transparent`}>
                                            {project.category}
                                        </span>
                                    </div>
                                    <Link href={`/portfolio/${project.slug}`} className="block">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags?.map((tag: string, i: number) => (
                                            <span key={i} className="text-xs font-medium text-gray-300 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-400 text-lg">No projects found. Add some in the Studio!</p>
                            <Link href="/studio" className="mt-4 inline-block text-blue-400 hover:text-blue-300">
                                Go to Studio &rarr;
                            </Link>
                        </div>
                    )}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center animate-slide-up [animation-delay:400ms] bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Have a project in mind?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Let's discuss how we can bring your vision to life.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                        >
                            Start a Project <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
