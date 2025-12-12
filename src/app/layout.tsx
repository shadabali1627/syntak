import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ChatWidget } from "@/components/chat-widget";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ClerkProvider } from '@clerk/nextjs';
import { Suspense } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Syntak | Scalable Future",
    description: "A state-of-the-art scalable platform.",
    metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
                <body className={`${outfit.className} min-h-screen antialiased`}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem={false}
                        forcedTheme="light"
                        disableTransitionOnChange
                    >
                        {children}
                        <Suspense fallback={null}>
                            <ProgressBar />
                        </Suspense>
                        <ChatWidget />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}