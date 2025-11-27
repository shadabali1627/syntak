import { Target, Users, Zap, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhyUsPage() {
    const reasons = [
        {
            icon: <Target className="w-6 h-6 text-primary" />,
            title: "Mission Driven",
            description: "We are laser-focused on delivering value that aligns with your long-term business goals.",
        },
        {
            icon: <Users className="w-6 h-6 text-primary" />,
            title: "Expert Team",
            description: "Our team consists of industry veterans who have built and scaled systems for Fortune 500 companies.",
        },
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Lightning Fast",
            description: "We prioritize performance in everything we do, ensuring your digital assets load instantly.",
        },
        {
            icon: <Award className="w-6 h-6 text-primary" />,
            title: "Award Winning",
            description: "Recognized for excellence in design and development by leading industry bodies.",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto py-12 px-6">

            {/* Hero Section */}
            <div className="text-center mb-20 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    Why Choose <span className="text-primary">Syntak</span>?
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    We combine technical expertise with creative innovation to build digital experiences that stand out.
                </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-slide-up [animation-delay:200ms]">

                {/* Left Column: Image/Visual */}
                <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative z-10 text-center p-8">
                        <div className="w-20 h-20 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl backdrop-blur-sm">
                            <CheckCircle2 className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Proven Track Record</h3>
                        <p className="text-gray-600 dark:text-gray-400">Delivering excellence since 2020</p>
                    </div>
                </div>

                {/* Right Column: Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-4 p-3 bg-primary/10 dark:bg-white/5 rounded-xl w-fit">
                                {reason.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                {reason.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center animate-slide-up [animation-delay:400ms] bg-gray-50 dark:bg-white/5 rounded-3xl p-12 border border-gray-200 dark:border-white/10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Ready to start your project?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
                    Join hundreds of satisfied clients who have transformed their digital presence with Syntak.
                </p>
                <Link
                    href="/start"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg hover:shadow-primary/25"
                >
                    Get Started Now <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

        </div>
    );
}
