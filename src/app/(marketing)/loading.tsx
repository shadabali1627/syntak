import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Loading() {
    return (
        <div className="w-full h-[50vh] flex items-center justify-center">
            <LoadingSpinner size={48} />
        </div>
    );
}
