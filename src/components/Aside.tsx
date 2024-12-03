import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideProps, ShoppingCart, HandPlatter, House } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type ItemProps = {
  label: string;
  path: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}[];

const NavMenu = () => {
  const navbar: ItemProps = [
    { label: "Início", path: "/dashboard", icon: House },
    { label: "Pedidos", path: "/dashboard/orders", icon: ShoppingCart },
    { label: "Cardápio", path: "/dashboard/menu", icon: HandPlatter },
  ];
  return (
    <Sidebar className="text-center">
      <SidebarHeader className="text-4xl">Painel</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="items-center gap-3">
              {navbar.map((item) => (
                <SidebarMenuItem
                  key={item.label}
                  className="flex justify-center items-center w-32 px-2 rounded-lg hover:cursor-pointer hover:font-normal hover:bg-slate-300"
                >
                  <item.icon size={30} />
                  <SidebarMenuButton className="hover:bg-transparent active:bg-transparent ">
                    <Link href={item.path}>
                      <span className="text-lg font-semibold">
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default NavMenu;
