"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";
import { Button } from "./button";
import { ChangeEvent, useState } from "react";
import { Input } from "./input";
import { FoodItem } from "@/lib/type";

export default function Menu({ menu }: { menu: Array<FoodItem> }) {
  const [quantity, setQuantity] = useState(0);

  const updateCount = (newCount: number) => {
    const count = Math.min(Math.max(newCount));

    if (count == -1) {
      return;
    } else {
      setQuantity(count);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(e.target.value, 10);
    if (!isNaN(newCount)) {
      updateCount(newCount);
    }
  };

  const decrement = () => updateCount(quantity - 1);
  const increment = () => updateCount(quantity + 1);
  return (
    <div className="flex gap-3 flex-wrap w-full justify-center">
      {menu.map((item) => (
        <Card
          className="flex flex-col w-80 h-fit max-[425px]:w-full"
          key={item.id}
        >
          <CardHeader>
            <CardTitle>{item.name}</CardTitle>
            <p className="text-sm text-gray-500">Categoria: {item.category}</p>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <p className="text-sm text-gray-600 my-2">
              {item.description == "undefined" ? "" : item.description}
            </p>
            <p className="text-lg font-semibold">R${item.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter
            id={item.id}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              <Button
                onClick={decrement}
                disabled={item.quantity === 0}
                variant="outline"
                size="icon"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) => handleInputChange(e)}
                className="w-14 text-center"
              />
              <Button
                onClick={increment}
                disabled={item.quantity === 0}
                variant="outline"
                size="icon"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
