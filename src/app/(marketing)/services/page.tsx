import Image from "next/image";
import { Code, Cpu, LineChart, Globe, Zap, Shield } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            icon: <Code className="w-8 h-8 text-white" />,
            title: "Web Development",
            description: "High-performance websites built with Next.js and Tailwind. We focus on speed, SEO, and scalability.",
            image: "/images/service-web-dev.png",
            gradient: "from-blue-500 to-cyan-500",
            border: "group-hover:border-blue-500/50"
        },
        {
            icon: <Cpu className="w-8 h-8 text-white" />,
            title: "AI Integration",
            description: "Automate your workflows with custom AI agents. We build smart systems that work while you sleep.",
            image: "/images/service-ai.png",
            gradient: "from-purple-500 to-pink-500",
            border: "group-hover:border-purple-500/50"
        },
        {
            icon: <LineChart className="w-8 h-8 text-white" />,
            title: "SEO Optimization",
            description: "Rank higher on Google with our technical SEO audits and content strategies driven by data.",
            image: "/images/service-seo.png",
            gradient: "from-pink-500 to-rose-500",
            border: "group-hover:border-pink-500/50"
        },
        {
            icon: <Globe className="w-8 h-8 text-white" />,
            title: "Global CDN",
            description: "Deploy your content to the edge. We ensure your site loads instantly for users in London, New York, or Lahore.",
            image: "/images/service-cdn.png",
            gradient: "from-orange-500 to-amber-500",
            border: "group-hover:border-orange-500/50"
        },
        {
            icon: <Zap className="w-8 h-8 text-white" />,
            title: "Performance Tuning",
            description: "We optimize your Core Web Vitals to ensure you pass Google's rigorous speed tests.",
            image: "/images/service-performance.png",
            gradient: "from-green-500 to-emerald-500",
            border: "group-hover:border-green-500/50"
        },
        {
            icon: <Shield className="w-8 h-8 text-white" />,
            title: "Security Audits",
            description: "Protect your data with enterprise-grade security protocols and regular penetration testing.",
            image: "/images/service-security.png",
            gradient: "from-cyan-500 to-teal-500",
            border: "group-hover:border-cyan-500/50"
        },
    ];

    return (
        <div className="min-h-screen bg-[#050A18] py-20 px-6 relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We don't just build websites; we build digital assets that grow with your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up [animation-delay:200ms]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-3xl bg-[#0B1221]/80 backdrop-blur-sm border border-white/5 ${service.border} hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden`}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />

                            <div className={`mb-8 relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                                <div className="w-full h-full bg-[#0B1221] rounded-2xl flex items-center justify-center">
                                    {service.icon}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-center group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}