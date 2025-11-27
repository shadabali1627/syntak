import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
    return (
        <section className="flex flex-col items-center justify-center text-center mt-20 max-w-4xl mx-auto">

            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-6">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Syntak v1.0 is live
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                Build Scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                    Digital Experiences
                </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mb-10">
                Syntak provides the architecture you need to scale from a simple blog
                to a complex enterprise application without rewriting code.
            </p>

            <div className="flex gap-4">
                <Link
                    href="/blog"
                    className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
                >
                    Read the Blog
                </Link>
                <Link
                    href="/dashboard"
                    className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition flex items-center gap-2"
                >
                    Admin Panel <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

        </section>
    );
}