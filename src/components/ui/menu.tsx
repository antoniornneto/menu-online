"use client";

import { FoodItem, ItemOrder } from "@/lib/type";
import CardItem from "../menu-components/card";
import { useState } from "react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export default function Menu({ menu }: { menu: FoodItem[] }) {
  const [order, setOrder] = useState<ItemOrder[]>([]);
  const router = useRouter();

  const updateOrder = (item: ItemOrder | FoodItem, quantity: number) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find(
        (orderItem) => orderItem.id === item.id
      );
      if (existingItem) {
        return prevOrder
          .map((orderItem) =>
            orderItem.id === item.id
              ? { ...orderItem, quantity: quantity }
              : orderItem
          )
          .filter((orderItem) => orderItem.quantity > 0);
      } else {
        return [
          ...prevOrder,
          { id: item.id, name: item.name, quantity, price: item.price },
        ];
      }
    });
  };

  const submitOrder = async () => {
    const totalPrice = order.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const orderJson = {
      totalPrice: parseFloat(totalPrice.toFixed(2)),
      items: order,
    };

    const createOrder = await fetch("api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderJson),
    });

    const res = await createOrder.json();

    router.push(`/order-submit/${res.id}`);

    setOrder([]); // Clear the order after submission
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {menu.map((item) => (
        <CardItem
          itemMenu={item}
          key={item.id}
          onUpdateOrder={updateOrder}
          quantity={
            order.find((orderItem) => orderItem.id === item.id)?.quantity || 0
          }
        />
      ))}
      <div>
        <Button
          onClick={submitOrder}
          className="mt-4"
          disabled={order.length === 0}
        >
          Enviar pedido
        </Button>
      </div>
    </div>
  );
}
