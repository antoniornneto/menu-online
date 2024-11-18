"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Quantity() {
  const [quantity, setQuantity] = useState(0);

  function decreaseQuantity(value: number) {
    if (value == 0) {
      return;
    } else {
      setQuantity(value - 1);
    }
  }

  function increaseQuantity(value: number) {
    setQuantity(value + 1);
  }

  return (
    <div className="self-center flex items-center">
      <Button
        onClick={() => decreaseQuantity(quantity)}
        className="w-5 bg-transparent border-transparent shadow-none"
      >
        <ChevronLeft color="red" />
      </Button>
      <Input className="w-10 text-center" value={quantity} />
      <Button
        onClick={() => increaseQuantity(quantity)}
        className="w-5 bg-transparent border-transparent shadow-none"
      >
        <ChevronRight color="red" />
      </Button>
    </div>
  );
}
