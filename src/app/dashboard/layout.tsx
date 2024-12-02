import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Menu from "@/components/Menu";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <Menu />
      <main className="w-screen h-screen flex flex-col gap-10 bg-zinc-800">
        <SidebarTrigger className="bg-white rounded-none rounded-r-lg" />
        <div className="bg-zinc-200 h-screen rounded-t-2xl p-5">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
