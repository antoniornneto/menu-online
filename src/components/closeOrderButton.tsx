"use client";

import { CheckCheck, X } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function CloseOrderButton({
  totalPrice,
  id,
}: {
  id: number;
  totalPrice: number;
}) {
  const [modal, setModal] = useState(false);
  const [change, setChange] = useState(0);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "0" || e.target.value == undefined) {
      setChange(0);
    } else {
      setChange(parseInt(e.target.value) - totalPrice);
    }
  };

  const closedOrder = async (id: number) => {
    await fetch(`/api/update-order/${id}`, {
      method: "PATCH",
    });
    location.reload();
  };

  return (
    <>
      <Button variant={"outline"} onClick={openModal}>
        Fechar pedido <CheckCheck />
      </Button>
      {modal && (
        <div className="fixed inset-0 bg-black/60 w-screen h-screen flex justify-center items-center z-10">
          <div className="bg-white rounded-lg p-5 flex flex-col">
            <button className="self-end" onClick={closeModal}>
              <X />
            </button>
            <div className="flex flex-col text-3xl gap-5">
              <span className="">
                Total do pedido: R$ {totalPrice.toFixed(2)}
              </span>
              <div className="flex items-center gap-2">
                <label>Valor pago:</label>
                <Input
                  onChange={(e) => handleChange(e)}
                  className="text-2xl w-40"
                  type="number"
                />
              </div>
              <span>Troco: R$ {change.toFixed(2)}</span>
              <Button onClick={() => closedOrder(id)}>Finalizar</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
