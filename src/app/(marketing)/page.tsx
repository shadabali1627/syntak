import Link from "next/link";
import { ArrowRight, Zap, Shield, Globe, Cpu } from "lucide-react";
import { getBlogPosts } from "@/features/blog/actions";
import { BlogCard } from "@/features/blog/components/blog-card";

export default async function HomePage() {
    const posts = await getBlogPosts();
    const recentPosts = posts.slice(0, 3);

    const features = [
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Lightning Fast",
            description: "Built on Next.js 14 with server components for sub-second page loads and optimal Core Web Vitals.",
        },
        {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: "Enterprise Security",
            description: "Bank-grade security protocols, automated backups, and role-based access control out of the box.",
        },
        {
            icon: <Globe className="w-6 h-6 text-primary" />,
            title: "Global Scale",
            description: "Deploy to the edge in seconds. Your content is cached and served from 300+ locations worldwide.",
        },
        {
            icon: <Cpu className="w-6 h-6 text-primary" />,
            title: "AI Powered",
            description: "Integrated AI agents to automate content generation, SEO optimization, and customer support.",
        },
    ];

    const stats = [
        { value: "99.9%", label: "Uptime SLA" },
        { value: "500ms", label: "Avg. Load Time" },
        { value: "10k+", label: "Active Users" },
        { value: "24/7", label: "Expert Support" },
    ];

    return (
        <div className="flex flex-col gap-0 pb-0">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center text-center pt-20 pb-32 max-w-5xl mx-auto px-6 overflow-hidden md:overflow-visible">
                {/* Background Blur Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

                {/* Small Badge */}
                <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm font-medium text-primary mb-8 shadow-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Syntak v1.0 is live
                </div>

                <h1 className="animate-slide-up [animation-delay:100ms] text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight">
                    Build Scalable <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">
                        Digital Experiences
                    </span>
                </h1>

                <p className="animate-slide-up [animation-delay:200ms] text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed">
                    Syntak provides the architecture you need to scale from a simple blog
                    to a complex enterprise application without rewriting code.
                </p>

                <div className="animate-slide-up [animation-delay:300ms] flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                        href="/blog"
                        className="px-8 py-4 rounded-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Read the Blog
                    </Link>
                    <Link
                        href="/dashboard"
                        className="px-8 py-4 rounded-full bg-white dark:bg-transparent border border-gray-200 hover:bg-gray-50 dark:border-white/20 dark:hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2 text-gray-900 dark:text-white font-medium shadow-sm"
                    >
                        Admin Panel <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Stats Section - White Background */}
            <section className="border-y border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">{stat.value}</span>
                            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Grid - Gray Background (Default) */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Everything you need to <span className="text-primary">scale</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        A comprehensive suite of tools designed to help you build better products faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-lg shadow-gray-200/50 dark:shadow-none hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-6 p-4 bg-primary/10 dark:bg-white/5 rounded-2xl w-fit">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recent Posts - White Background */}
            <section className="py-24 bg-white dark:bg-transparent border-y border-gray-200 dark:border-none">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Latest from the Blog
                        </h2>
                        <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                            View all posts <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {recentPosts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors">
                            View all posts <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section - Gray Background (Default) */}
            <section className="py-24 max-w-5xl mx-auto px-6 w-full">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-20 text-center sm:px-12 sm:py-24 lg:px-16 shadow-2xl shadow-primary/25">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                    <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/10 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to start your next project?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
                        Join thousands of developers and businesses who are building the future with Syntak.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/contact"
                            className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:scale-105"
                        >
                            Get started
                        </Link>
                        <Link href="/approach" className="text-sm font-semibold leading-6 text-white flex items-center gap-1 hover:gap-2 transition-all">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}