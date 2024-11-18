"use client";

import { Input } from "@/components/ui/input";
import { Search, SquareMenu } from "lucide-react";

export default function Nav() {
  return (
    <div className="flex justify-between gap-3 items-center">
      <SquareMenu size={30} className="cursor-pointer" />
      <Input></Input>
      <Search size={30} className="cursor-pointer" />
    </div>
  );
}
