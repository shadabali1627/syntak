import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // ◄── CRITICAL: This imports Tailwind

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Syntak | Scalable Future",
    description: "A state-of-the-art scalable platform.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            {/* FIXES APPLIED:
         1. `min-h-screen`: Ensures background color fills the whole page even if content is short.
         2. `antialiased`: Makes the Inter font look crisp and sharp.
      */}
            <body className={`${inter.className} min-h-screen antialiased`}>
                {children}
            </body>
        </html>
    );
}