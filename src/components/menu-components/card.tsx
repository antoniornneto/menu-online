import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { MenuItemProps } from "@/lib/type";
import { Button } from "../ui/button";

export default function CardItem({
  itemMenu,
  quantity,
  onUpdateOrder,
}: MenuItemProps) {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleQuantityChange = (newQuantity: number) => {
    setItemQuantity(newQuantity);
    onUpdateOrder(itemMenu, newQuantity);
  };

  return (
    <Card
      className="flex flex-col w-80 h-fit max-[425px]:w-full"
      key={itemMenu.id}
    >
      <CardHeader>
        <CardTitle>{itemMenu.name}</CardTitle>
        <p className="text-sm text-gray-500">Categoria: {itemMenu.category}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <p className="text-sm text-gray-600 my-2">
          {itemMenu.description == "undefined" ? "" : itemMenu.description}
        </p>
        <p className="text-lg font-semibold">R${itemMenu.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter
        id={itemMenu.id}
        className="flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <Button
            disabled={itemMenu.stock === 0}
            onClick={() => handleQuantityChange(Math.max(0, itemQuantity - 1))}
            variant="outline"
            size="icon"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="mx-4">{itemQuantity}</span>
          <Button
            disabled={itemMenu.stock === 0}
            onClick={() => handleQuantityChange(itemQuantity + 1)}
            variant="outline"
            size="icon"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
