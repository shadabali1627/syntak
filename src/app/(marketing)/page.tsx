import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Shield, Globe, Cpu } from "lucide-react";
import { getBlogPosts } from "@/features/blog/actions";
import { BlogCard } from "@/features/blog/components/blog-card";
import { HeroSection } from "@/components/HeroSection";

export default async function HomePage() {
    const posts = await getBlogPosts();
    const recentPosts = posts.slice(0, 3);

    const features = [
        {
            icon: <Image src="/images/feature-speed.png" alt="Speed" width={64} height={64} className="w-16 h-16" />,
            title: "Lightning Fast",
            description: "Built on Next.js 14 with server components for sub-second page loads and optimal Core Web Vitals.",
        },
        {
            icon: <Image src="/images/feature-security.png" alt="Security" width={64} height={64} className="w-16 h-16" />,
            title: "Enterprise Security",
            description: "Bank-grade security protocols, automated backups, and role-based access control out of the box.",
        },
        {
            icon: <Image src="/images/feature-global.png" alt="Global" width={64} height={64} className="w-16 h-16" />,
            title: "Global Scale",
            description: "Deploy to the edge in seconds. Your content is cached and served from 300+ locations worldwide.",
        },
        {
            icon: <Image src="/images/feature-ai.png" alt="AI" width={64} height={64} className="w-16 h-16" />,
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
            <HeroSection />

            {/* Stats Section - Soft Background */}
            <section className="border-y border-border bg-primary/5 dark:bg-white/5 py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">{stat.value}</span>
                            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Grid - Gray Background (Default) */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Everything you need to <span className="text-primary">scale</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A comprehensive suite of tools designed to help you build better products faster.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/20 hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            <div className="mb-6 p-4 bg-primary/10 dark:bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recent Posts - Pattern Background */}
            <section className="py-24 bg-muted/50 dark:bg-transparent border-y border-border relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 dark:opacity-20"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
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