import { Target, Users, Zap, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhyUsPage() {
    const reasons = [
        {
            icon: <Target className="w-6 h-6 text-blue-400" />,
            title: "Mission Driven",
            description: "We are laser-focused on delivering value that aligns with your long-term business goals.",
            gradient: "from-blue-500/20 to-cyan-500/20",
            border: "border-blue-500/20"
        },
        {
            icon: <Users className="w-6 h-6 text-purple-400" />,
            title: "Expert Team",
            description: "Our team consists of industry veterans who have built and scaled systems for Fortune 500 companies.",
            gradient: "from-purple-500/20 to-pink-500/20",
            border: "border-purple-500/20"
        },
        {
            icon: <Zap className="w-6 h-6 text-amber-400" />,
            title: "Lightning Fast",
            description: "We prioritize performance in everything we do, ensuring your digital assets load instantly.",
            gradient: "from-amber-500/20 to-orange-500/20",
            border: "border-amber-500/20"
        },
        {
            icon: <Award className="w-6 h-6 text-emerald-400" />,
            title: "Award Winning",
            description: "Recognized for excellence in design and development by leading industry bodies.",
            gradient: "from-emerald-500/20 to-green-500/20",
            border: "border-emerald-500/20"
        },
    ];

    return (
        <div className="min-h-screen bg-[#050A18] py-20 px-6 relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Hero Section */}
                <div className="text-center mb-20 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Syntak</span>?
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We combine technical expertise with creative innovation to build digital experiences that stand out.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-slide-up [animation-delay:200ms]">

                    {/* Left Column: Image/Visual */}
                    <div className="relative h-[450px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B1221] to-[#151E32] border border-white/5 flex items-center justify-center group shadow-2xl">
                        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                        <div className="relative z-10 text-center p-8">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/25 transform group-hover:scale-110 transition-transform duration-500">
                                <CheckCircle2 className="w-12 h-12 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-3">Proven Track Record</h3>
                            <p className="text-blue-200/80 text-lg">Delivering excellence since 2020</p>
                        </div>
                    </div>

                    {/* Right Column: Reasons Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl bg-[#0B1221]/50 border ${reason.border} hover:bg-[#0B1221] transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden`}
                            >
                                {/* Hover Gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="relative z-10">
                                    <div className="mb-4 p-3 bg-white/5 rounded-xl w-fit backdrop-blur-sm">
                                        {reason.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center animate-slide-up [animation-delay:400ms] bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-12 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to start your project?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Join hundreds of satisfied clients who have transformed their digital presence with Syntak.
                        </p>
                        <Link
                            href="/start"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
                        >
                            Get Started Now <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
