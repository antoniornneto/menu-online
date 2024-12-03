"use client";
import DisplayItem from "@/components/displayItem";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JsonValue } from "@prisma/client/runtime/library";
import { useState } from "react";
import CloseOrderButton from "./closeOrderButton";
import { Button } from "./ui/button";
import { CheckCheck } from "lucide-react";

interface OrderProps {
  id: number;
  items: JsonValue;
  totalPrice: number;
  finished: boolean;
  createdAt: Date;
}

export default function OrderTable({ orders }: { orders: OrderProps[] }) {
  const [filter, setFilter] = useState<"todos" | "aberto" | "fechado">("todos");

  const filteredOrders = orders.filter((order) => {
    if (filter === "aberto") return !order.finished;
    if (filter === "fechado") return order.finished;
    return true;
  });

  return (
    <div>
      <div className="mb-4">
        <Select
          onValueChange={(value) =>
            setFilter(value as "todos" | "aberto" | "fechado")
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtro de pedidos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos os pedidos</SelectItem>
            <SelectItem value="aberto">Pedidos abertos</SelectItem>
            <SelectItem value="fechado">Pedidos fechado</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">
              Nº do Pedido
            </TableHead>
            <TableHead className="text-center">Descrição do pedido</TableHead>
            <TableHead className="text-center">Valor Total</TableHead>
            <TableHead className="text-center">Finalizado</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium text-center">
                {String(order.id).padStart(3, "0")}
              </TableCell>
              <DisplayItem items={order.items} />
              <TableCell className="text-center">
                R$ {order.totalPrice.toFixed(2)}
              </TableCell>
              <TableCell className="text-center">
                {order.finished == false ? "Aberto" : "Finalizado"}
              </TableCell>
              {order.finished ? (
                <TableCell className="w-40">
                  <Button variant={"outline"} disabled>
                    Fechar pedido <CheckCheck />
                  </Button>
                </TableCell>
              ) : (
                <TableCell className="w-40">
                  <CloseOrderButton
                    id={order.id}
                    totalPrice={order.totalPrice}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
