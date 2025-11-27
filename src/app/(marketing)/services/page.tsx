import { Code, Cpu, LineChart, Globe, Zap, Shield } from "lucide-react";

const services = [
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Web Development",
        description: "High-performance websites built with Next.js and Tailwind. We focus on speed, SEO, and scalability.",
    },
    {
        icon: <Cpu className="w-8 h-8 text-primary" />,
        title: "AI Integration",
        description: "Automate your workflows with custom AI agents. We build smart systems that work while you sleep.",
    },
    {
        icon: <LineChart className="w-8 h-8 text-primary" />,
        title: "SEO Optimization",
        description: "Rank higher on Google with our technical SEO audits and content strategies driven by data.",
    },
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: "Global CDN",
        description: "Deploy your content to the edge. We ensure your site loads instantly for users in London, New York, or Lahore.",
    },
    {
        icon: <Zap className="w-8 h-8 text-primary" />,
        title: "Performance Tuning",
        description: "We optimize your Core Web Vitals to ensure you pass Google's rigorous speed tests.",
    },
    {
        icon: <Shield className="w-8 h-8 text-primary" />,
        title: "Security Audits",
        description: "Protect your data with enterprise-grade security protocols and regular penetration testing.",
    },
];

export default function ServicesPage() {
    return (
        <div className="max-w-6xl mx-auto py-12">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Our <span className="text-primary">Services</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    We don't just build websites; we build digital assets that grow with your business.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                        <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                            {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}