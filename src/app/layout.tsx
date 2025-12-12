import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ChatWidget } from "@/components/chat-widget";
import { ProgressBar } from "@/components/ui/progress-bar";

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
                    <ProgressBar />
                    <ChatWidget />
                </ThemeProvider>
            </body>
        </html>
    );
}