"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Why us", href: "/why-us" },
        { name: "Approach", href: "/approach" },
        { name: "Services", href: "/services", hasDropdown: true },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <>
            <header className="fixed top-0 z-50 w-full flex justify-center py-0">
                <nav className="w-full flex items-center justify-between bg-[#050A18]/90 backdrop-blur-md border-b border-white/5 px-6 py-4 shadow-lg">

                    {/* Logo (Visible on Mobile and Desktop) */}
                    <Link href="/" className="flex items-center gap-2 mr-4 group">
                        <div className="p-1.5 rounded-lg transition-colors">
                            {/* Simple Gold Icon Placeholder */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-white">
                            Syntak
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative text-sm font-medium transition-all duration-300 flex items-center gap-1",
                                        isActive
                                            ? "text-[#38bdf8]"
                                            : "text-gray-300 hover:text-[#38bdf8]"
                                    )}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-2">
                        <div className="hidden md:block w-2" />
                        <Link
                            href="/start"
                            className="hidden md:block bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold px-6 py-2.5 rounded-md text-sm transition-colors"
                        >
                            Get Started
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-[#050A18] pt-24 px-6 md:hidden animate-in slide-in-from-top-10 duration-200">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-2xl font-bold py-4 border-b border-white/5",
                                    pathname === link.href ? "text-[#38bdf8]" : "text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/start"
                            className="mt-4 w-full bg-[#0ea5e9] text-white font-bold text-center py-4 rounded-xl text-lg"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}