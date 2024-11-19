"use client";

import { Input } from "@/components/ui/input";
import { Search, SquareMenu } from "lucide-react";

export default function Nav() {
  const clientName = localStorage.getItem("name");
  return (
    <div className="space-y-5">
      <div className="flex justify-between gap-3 items-center">
        <SquareMenu size={30} className="cursor-pointer" />
        <Input></Input>
        <Search size={30} className="cursor-pointer" />
      </div>
      <h1 className="text-2xl font-bold">
        Olá {clientName}, o que você gostaria de pedir?
      </h1>
    </div>
  );
}
