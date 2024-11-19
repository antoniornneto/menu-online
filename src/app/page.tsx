"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  const getClient = localStorage.getItem("name");

  if (getClient) {
    router.push("/menu");
  }

  const [modal, setModal] = useState(false);
  const [clientName, setClientName] = useState("");

  function handleModal(value: boolean) {
    if (value == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setClientName(event.target.value);
  }

  function redirect(clientName: string) {
    localStorage.setItem("name", clientName);

    setTimeout(() => {
      router.push("/menu");
    }, 1000);
  }

  return (
    <div className="w-screen h-screen flex flex-col gap-3 items-center justify-center text-center">
      <div className="relative w-[350px] h-96">
        <Image alt="/" src={"/menu.png"} fill sizes="100vw" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-balance">
          Pedidos simples na palma de sua mão.
        </h1>
        <p className="text-sm text-zinc-400">
          Soluções de cardápios online para o seu estabelecimento.
        </p>
      </div>
      <Button
        onClick={() => handleModal(modal)}
        className="text-xl text-center font-bold shadow-black shadow-md"
      >
        Começar
        {/* <Link href={"/menu"}></Link> */}
      </Button>

      {modal && (
        <div className="fixed h-screen w-screen flex items-center bg-black/60 p-4">
          <div className="w-screen bg-white p-5 flex flex-col items-center gap-3 rounded-lg">
            <button onClick={() => handleModal(modal)} className="self-end">
              <X size={30} />
            </button>
            <h1 className="font-bold">Insira seu nome</h1>
            <Input
              placeholder="Ex: João da Silva"
              onChange={(e) => handleChange(e)}
            />
            <Button onClick={() => redirect(clientName)}>Continuar</Button>
          </div>
        </div>
      )}
    </div>
  );
}
