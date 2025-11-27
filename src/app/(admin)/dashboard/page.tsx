export default function DashboardPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-6">Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stat Card 1 */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-gray-400 text-sm">Total Views</div>
                    <div className="text-3xl font-bold text-white mt-2">12,450</div>
                </div>
                {/* Stat Card 2 */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-gray-400 text-sm">Active Subscribers</div>
                    <div className="text-3xl font-bold text-white mt-2">843</div>
                </div>
            </div>
        </div>
    );
}