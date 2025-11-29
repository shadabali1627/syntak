import Image from "next/image";
import { Code, Cpu, LineChart, Globe, Zap, Shield } from "lucide-react";

const services = [
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Web Development",
        description: "High-performance websites built with Next.js and Tailwind. We focus on speed, SEO, and scalability.",
        image: "/images/service-web-dev.png",
    },
    {
        icon: <Cpu className="w-8 h-8 text-primary" />,
        title: "AI Integration",
        description: "Automate your workflows with custom AI agents. We build smart systems that work while you sleep.",
        image: "/images/service-ai.png",
    },
    {
        icon: <LineChart className="w-8 h-8 text-primary" />,
        title: "SEO Optimization",
        description: "Rank higher on Google with our technical SEO audits and content strategies driven by data.",
        image: "/images/service-seo.png",
    },
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: "Global CDN",
        description: "Deploy your content to the edge. We ensure your site loads instantly for users in London, New York, or Lahore.",
        image: "/images/service-cdn.png",
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Performance Tuning",
        description: "We optimize your Core Web Vitals to ensure you pass Google's rigorous speed tests.",
        image: "/images/service-performance.png",
    },
    {
        icon: <Shield className="w-8 h-8 text-primary" />,
        title: "Security Audits",
        description: "Protect your data with enterprise-grade security protocols and regular penetration testing.",
        image: "/images/service-security.png",
    },
];

export default function ServicesPage() {
    return (
        <div className="max-w-6xl mx-auto py-12 px-6">
            <div className="text-center mb-16 animate-fade-in relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] -z-10" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Our <span className="text-primary">Services</span>
                </h1>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                    We don't just build websites; we build digital assets that grow with your business.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up [animation-delay:200ms]">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl hover:border-primary/20 hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-1"
                    >
                        <div className="mb-6 relative w-20 h-20 mx-auto">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={80}
                                height={80}
                                className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-center">
                            {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-center">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}