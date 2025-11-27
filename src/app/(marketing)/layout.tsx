import { Navbar } from "@/components/layout/navbar";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-28 px-6">{children}</main>
            <footer className="py-10 text-center text-white/20 text-sm">
                © 2025 Syntak Inc.
            </footer>
        </div>
    );
}