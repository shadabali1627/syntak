import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Loading() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <LoadingSpinner size={48} />
        </div>
    );
}
