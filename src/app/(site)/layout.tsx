import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/navigation/Sidebar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex flex-1 flex-col bg-white">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
