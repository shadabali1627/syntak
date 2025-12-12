"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center bg-[#050A18]">
            {/* Hero Background Image */}
            <div className="absolute inset-0 -z-20 h-full w-full">
                <Image
                    src="/images/hero-banner.png"
                    alt="Hero Background"
                    fill
                    sizes="100vw"
                    className="object-cover object-center opacity-80"
                    priority
                    unoptimized
                />
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050A18] via-[#050A18]/80 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-32 pb-20">

                {/* Left Column: Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    {/* Small Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 backdrop-blur-md text-sm font-medium text-[#38bdf8] mb-8 shadow-sm cursor-default"
                    >
                        Syntak v1.0 is live
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-tight max-w-4xl"
                    >
                        Build Scalable <br />
                        <span className="text-white">
                            Digital Experiences
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed font-medium"
                    >
                        Syntak provides the architecture you need to scale from a simple blog
                        to a complex enterprise application without rewriting code.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link
                            href="/blog"
                            className="px-8 py-4 rounded-md bg-[#0ea5e9] text-white hover:bg-[#0284c7] font-semibold transition-all hover:scale-105 shadow-lg"
                        >
                            Read the Blog
                        </Link>
                        <Link
                            href="/dashboard"
                            className="px-8 py-4 rounded-md bg-transparent border border-[#0ea5e9] text-[#0ea5e9] hover:bg-[#0ea5e9]/10 backdrop-blur-sm transition-all hover:scale-105 flex items-center justify-center gap-2 font-medium shadow-sm group"
                        >
                            Admin Panel <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Right Column: Profile Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col items-center justify-center text-center md:-mt-80"
                >
                    <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full overflow-hidden border-4 border-[#38bdf8]/20 shadow-2xl shadow-[#38bdf8]/10">
                        <Image
                            src="/images/shadab-ali.jpg"
                            alt="Shadab Ali"
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center 20%' }}
                            sizes="(max-width: 768px) 128px, 160px"
                        />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Shadab Ali</h3>
                    <p className="text-[#38bdf8] text-xl font-medium mb-2">AI Engineer</p>
                    <p className="text-gray-400">Email: shadabali1627@gmail.com</p>
                </motion.div>
            </div>
        </section>
    );
}
