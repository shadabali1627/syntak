import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
    const projects = [
        {
            title: "FinTech Dashboard",
            category: "Web Application",
            image: "/images/portfolio-fintech.png",
            description: "A real-time financial analytics platform processing millions of transactions daily.",
            tags: ["Next.js", "TypeScript", "D3.js"],
        },
        {
            title: "E-Commerce Scale",
            category: "E-Commerce",
            image: "/images/portfolio-ecommerce.png",
            description: "Scalable headless commerce solution serving 50k+ concurrent users during flash sales.",
            tags: ["Shopify", "React", "Node.js"],
        },
        {
            title: "HealthAI",
            category: "Healthcare",
            image: "/images/portfolio-fintech.png",
            description: "AI-powered diagnostic assistant helping doctors make faster, more accurate decisions.",
            tags: ["Python", "TensorFlow", "AWS"],
        },
        {
            title: "Urban Mobility",
            category: "Mobile App",
            image: "/images/portfolio-ecommerce.png",
            description: "Smart city transportation app integrating public transit, ride-sharing, and payments.",
            tags: ["React Native", "Maps API", "Stripe"],
        },
    ];

    return (
        <div className="max-w-7xl mx-auto py-12 px-6">

            {/* Header */}
            <div className="text-center mb-20 animate-fade-in relative">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 dark:opacity-20"></div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                    Our <span className="text-primary">Portfolio</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    A showcase of our best work. We build products that solve real problems and drive growth.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up [animation-delay:200ms]">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative rounded-3xl overflow-hidden bg-card border border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
                    >
                        {/* Image Container */}
                        <div className="relative h-[300px] w-full overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <button className="px-6 py-3 rounded-full bg-white text-black font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                                    View Case Study <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                    {project.category}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center animate-slide-up [animation-delay:400ms] bg-primary/5 rounded-3xl p-12 border border-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] -z-10" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                    Have a project in mind?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                    Let's discuss how we can bring your vision to life.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                >
                    Start a Project <ArrowUpRight className="w-4 h-4" />
                </Link>
            </div>

        </div>
    );
}
