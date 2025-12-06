import { Search, PenTool, Code2, Rocket, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ApproachPage() {
    const steps = [
        {
            icon: <Search className="w-6 h-6 text-white" />,
            title: "Discovery",
            description: "We start by diving deep into your business goals, target audience, and technical requirements to build a solid foundation.",
            color: "bg-blue-500",
            gradient: "from-blue-500 to-cyan-500",
            border: "group-hover:border-blue-500/50"
        },
        {
            icon: <PenTool className="w-6 h-6 text-white" />,
            title: "Design",
            description: "Our designers craft intuitive, high-fidelity prototypes that align with your brand identity and user expectations.",
            color: "bg-purple-500",
            gradient: "from-purple-500 to-pink-500",
            border: "group-hover:border-purple-500/50"
        },
        {
            icon: <Code2 className="w-6 h-6 text-white" />,
            title: "Development",
            description: "We build your solution using modern tech stacks like Next.js and Tailwind, ensuring scalability and performance.",
            color: "bg-pink-500",
            gradient: "from-pink-500 to-rose-500",
            border: "group-hover:border-pink-500/50"
        },
        {
            icon: <Rocket className="w-6 h-6 text-white" />,
            title: "Launch",
            description: "We handle the deployment process, setting up CI/CD pipelines and ensuring a smooth transition to production.",
            color: "bg-orange-500",
            gradient: "from-orange-500 to-amber-500",
            border: "group-hover:border-orange-500/50"
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-white" />,
            title: "Growth",
            description: "Post-launch, we monitor performance and implement data-driven optimizations to help your product scale.",
            color: "bg-green-500",
            gradient: "from-green-500 to-emerald-500",
            border: "group-hover:border-green-500/50"
        },
    ];

    return (
        <div className="min-h-screen bg-[#050A18] py-20 px-6 relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-24 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Approach</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A proven methodology that transforms complex challenges into elegant, scalable solutions.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 animate-slide-up [animation-delay:200ms]">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-30 -z-10" />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Icon Bubble */}
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg shadow-black/20 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 z-10`}>
                                {step.icon}
                            </div>

                            {/* Content Card */}
                            <div className={`p-8 rounded-3xl bg-[#0B1221]/80 backdrop-blur-sm border border-white/5 ${step.border} hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 w-full h-full group-hover:-translate-y-2`}>
                                <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Step 0{index + 1}</div>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-center animate-slide-up [animation-delay:400ms]">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                        See Our Work <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </div>
    );
}
