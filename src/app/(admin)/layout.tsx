import { AdminSidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#130623]">
            {/* The Sidebar is fixed on the left */}
            <AdminSidebar />

            {/* The Page Content is pushed to the right */}
            <main className="pl-64 min-h-screen">
                <div className="max-w-7xl mx-auto p-8 pt-10">
                    {children}
                </div>
            </main>
        </div>
    );
}