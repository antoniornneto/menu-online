import Menu from "@/components/ui/menu";
import { prisma } from "@/lib/prisma";
import { FoodItem } from "@/lib/type";

export default async function Component() {
  const menu: FoodItem = await prisma.menu.findMany();
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Menu Online</h1>
      </div>
      <Menu menu={menu} />
    </div>
  );
}
