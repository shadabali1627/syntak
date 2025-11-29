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
            <header className="fixed top-0 z-50 w-full flex justify-center py-4 md:py-6 px-4">
                <nav className="w-full max-w-5xl flex items-center justify-between bg-white/70 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full px-4 py-2 shadow-lg ring-1 ring-black/5">

                    {/* Logo (Visible on Mobile and Desktop) */}
                    <Link href="/" className="flex items-center gap-2 mr-4 group">
                        <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <div className="w-5 h-5 bg-gradient-to-br from-primary to-purple-600 rounded-md" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                            Syntak
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1",
                                        isActive
                                            ? "bg-black/5 text-black dark:bg-white/10 dark:text-white shadow-sm"
                                            : "text-gray-600 hover:text-black hover:bg-black/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/5"
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
                            className="hidden md:block bg-primary hover:bg-primary/90 text-white dark:text-[#1e0b36] font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
                        >
                            Get Started
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white dark:bg-[#130623] pt-24 px-6 md:hidden animate-in slide-in-from-top-10 duration-200">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-2xl font-bold py-4 border-b border-gray-100 dark:border-white/5",
                                    pathname === link.href ? "text-primary" : "text-gray-900 dark:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/start"
                            className="mt-4 w-full bg-primary text-white dark:text-[#1e0b36] font-bold text-center py-4 rounded-xl text-lg"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}