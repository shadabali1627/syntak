import { Search, PenTool, Code2, Rocket, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ApproachPage() {
    const steps = [
        {
            icon: <Search className="w-6 h-6 text-white" />,
            title: "Discovery",
            description: "We start by diving deep into your business goals, target audience, and technical requirements to build a solid foundation.",
            color: "bg-blue-500",
        },
        {
            icon: <PenTool className="w-6 h-6 text-white" />,
            title: "Design",
            description: "Our designers craft intuitive, high-fidelity prototypes that align with your brand identity and user expectations.",
            color: "bg-purple-500",
        },
        {
            icon: <Code2 className="w-6 h-6 text-white" />,
            title: "Development",
            description: "We build your solution using modern tech stacks like Next.js and Tailwind, ensuring scalability and performance.",
            color: "bg-pink-500",
        },
        {
            icon: <Rocket className="w-6 h-6 text-white" />,
            title: "Launch",
            description: "We handle the deployment process, setting up CI/CD pipelines and ensuring a smooth transition to production.",
            color: "bg-orange-500",
        },
        {
            icon: <BarChart3 className="w-6 h-6 text-white" />,
            title: "Growth",
            description: "Post-launch, we monitor performance and implement data-driven optimizations to help your product scale.",
            color: "bg-green-500",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 px-6">

            {/* Header */}
            <div className="text-center mb-20 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    Our <span className="text-primary">Approach</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                    A proven methodology that transforms complex challenges into elegant, scalable solutions.
                </p>
            </div>

            {/* Steps Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 animate-slide-up [animation-delay:200ms]">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-20 -z-10" />

                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center text-center group"
                    >
                        {/* Icon Bubble */}
                        <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            {step.icon}
                        </div>

                        {/* Content Card */}
                        <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 w-full h-full">
                            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Step 0{index + 1}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105"
                >
                    See Our Work <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

        </div>
    );
}
