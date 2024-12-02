"use client";
import { Minus, Plus } from "lucide-react";
import { Button } from "./button";
import { ItemProp } from "@/lib/type";
import { useState } from "react";

export default function OrderQuantity({ item }: { item: ItemProp }) {
  const [quantity, setQuantity] = useState(0);

  function plusQuantity(value: number) {
    if (value == 0) {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  function minusQuantity(value: number) {
    if (value > 0) {
      setQuantity(quantity - 1);
    }
  }

  console.log(quantity);
  return (
    <div className="flex items-center">
      <Button disabled={item.quantity === 0} variant="outline" size="icon">
        <Minus onClick={() => minusQuantity(quantity)} className="h-4 w-4" />
      </Button>
      <span className="mx-2 w-8 text-center">{quantity}</span>
      <Button
        onClick={() => plusQuantity(quantity)}
        disabled={item.quantity === 0}
        variant="outline"
        size="icon"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
