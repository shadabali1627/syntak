"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 max-w-7xl mx-auto px-6 overflow-hidden">
            {/* Hero Background Image */}
            <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                <Image
                    src="/images/hero-bg.png"
                    alt="Hero Background"
                    fill
                    className="object-cover object-center opacity-90 dark:opacity-20"
                    priority
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-white/40 dark:bg-black/80 mix-blend-overlay" />
            </div>

            {/* Radial Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />

            {/* Small Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm text-sm font-medium text-primary mb-8 shadow-sm hover:shadow-md transition-all cursor-default"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Syntak v1.0 is live
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-tight"
            >
                Build Scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
                    Digital Experiences
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-12 leading-relaxed"
            >
                Syntak provides the architecture you need to scale from a simple blog
                to a complex enterprise application without rewriting code.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20"
            >
                <Link
                    href="/blog"
                    className="px-8 py-4 rounded-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                    Read the Blog
                </Link>
                <Link
                    href="/dashboard"
                    className="px-8 py-4 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/10 backdrop-blur-sm transition-all hover:scale-105 flex items-center justify-center gap-2 text-gray-900 dark:text-white font-medium shadow-sm hover:shadow-md group"
                >
                    Admin Panel <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </motion.div>

            {/* Hero Graphic (Visual Hook) - Mockup Container */}
            <motion.div
                initial={{ opacity: 0, y: 40, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                className="relative w-full max-w-2xl mx-auto perspective-1000"
                style={{ perspective: "1000px" }}
            >
                <div className="relative rounded-xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 overflow-hidden transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out group">
                    <Image
                        src="/images/hero-dashboard.png"
                        alt="Syntak Analytics Dashboard"
                        width={1200}
                        height={800}
                        className="w-full h-auto object-cover"
                        priority
                    />

                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50 pointer-events-none" />
                </div>
            </motion.div>
        </section>
    );
}
