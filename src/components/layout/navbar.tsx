"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Why us", href: "/why-us" },
        { name: "Approach", href: "/approach" },
        { name: "Services", href: "/services", hasDropdown: true },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <header className="fixed top-0 z-50 w-full flex justify-center py-6">
            <nav className="flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 pl-4 shadow-lg">
                <div className="flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1",
                                    isActive
                                        ? "bg-white/10 text-white shadow-sm"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-70" />}
                            </Link>
                        );
                    })}
                </div>
                <div className="w-4" />
                <Link
                    href="/start"
                    className="bg-primary hover:bg-[#9061f9] text-[#1e0b36] font-semibold px-6 py-2.5 rounded-full text-sm transition-colors"
                >
                    Get Started
                </Link>
            </nav>
        </header>
    );
}