"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

const sidebarLinks = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Content", href: "/dashboard/content", icon: FileText },
    { name: "Subscribers", href: "/dashboard/users", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-full w-64 border-r border-white/10 bg-[#0d041c] flex flex-col z-50">

            {/* Logo Area */}
            <div className="h-20 flex items-center px-6 border-b border-white/10">
                <Link href="/" className="font-bold text-xl tracking-tight text-white">
                    Syntak <span className="text-primary">OS</span>
                </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 mt-2 px-2">
                    Menu
                </div>
                {sidebarLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-primary text-[#1e0b36] shadow-[0_0_15px_rgba(167,139,250,0.3)]"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / User */}
            <div className="p-4 border-t border-white/10 bg-white/5">
                <div className="flex items-center gap-3 justify-center">
                    <UserButton afterSignOutUrl="/" />
                    <div className="text-sm text-white font-medium">
                        Admin
                    </div>
                </div>
            </div>
        </aside>
    );
}