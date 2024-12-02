import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import OrderQuantity from "@/components/ui/quantityOrder";
import { prisma } from "@/lib/prisma";
import { FoodItem } from "@/lib/type";

export default async function Component() {
  const menu: FoodItem = await prisma.menu.findMany();
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Menu Online</h1>
      </div>
      <div className="flex gap-3 flex-wrap w-full justify-center">
        {menu.map((item) => (
          <Card
            className="flex flex-col w-80 h-fit max-[425px]:w-full"
            key={item.id}
          >
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <p className="text-sm text-gray-500">
                Categoria: {item.category}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <p className="text-sm text-gray-600 my-2">
                {item.description == "undefined" ? "" : item.description}
              </p>
              <p className="text-lg font-semibold">R${item.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <OrderQuantity item={item} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
