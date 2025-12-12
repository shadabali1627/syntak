"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function ProgressBar() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Complete the progress bar when the route changes
        setProgress(100);
        const timer = setTimeout(() => {
            setIsVisible(false);
            setProgress(0);
        }, 500);
        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    useEffect(() => {
        // Add a global click listener to detect navigation starts
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (target && target.href && target.href.startsWith(window.location.origin) && target.target !== '_blank') {
                // If clicking a local link that isn't the current page (hash links excluded for simplicity unless needed)
                if (target.pathname !== window.location.pathname) {
                    setIsVisible(true);
                    setProgress(30); // Start progress

                    // Trickle progress
                    const interval = setInterval(() => {
                        setProgress((old) => {
                            if (old >= 90) {
                                clearInterval(interval);
                                return 90;
                            }
                            return old + Math.random() * 10;
                        });
                    }, 500);

                    // Cleanup interval on unmount or completion (completion handled by effect above)
                    // We attach it to the window to clear it if needed? No, purely local state is tricky here.
                    // For simplicity, we just let the effect rewrite it.
                }
            }
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent">
            <div
                className="h-full bg-[#38bdf8] transition-all duration-300 ease-out shadow-[0_0_10px_#38bdf8]"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
