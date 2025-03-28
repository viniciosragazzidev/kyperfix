import Sidebar from "@/components/globals/sidebar/sidebar";
import TopNav from "@/components/globals/topbar/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full grid grid-cols-1 lg:grid-cols-[232px_1fr]  min-h-screen">
      {/* Layout UI */}
      <Sidebar />

      {/* Place children where you want to render a page or nested layout */}
      <main className="px-4">
        <TopNav />
        {children}
      </main>
    </div>
  );
}
