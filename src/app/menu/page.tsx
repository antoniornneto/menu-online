"use client";

import Menu from "@/components/page/menu";
import Nav from "@/components/ui/nav";

export default function page() {
  const products = [
    {
      id: 1,
      name: "Churrasquinho",
      price: 12,
      description: "Churrasquinho de boi, frango, coração ou linguiça.",
      image: "/churrasquinho.jpg",
    },
    {
      id: 2,
      name: "Salgadinho",
      price: 15,
      description: "Porção de salgadinhos sortidos.",
      image: "/salgadinhos.jpg",
    },
    {
      id: 3,
      name: "Pastel",
      price: 10,
      description: "Pastel de queijo, frango ou carne.",
      image: "/pastel.jpg",
    },
  ];
  return (
    <div className="p-5 space-y-5 text-center">
      <Nav />
      <Menu products={products} />
    </div>
  );
}
