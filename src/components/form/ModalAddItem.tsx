"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddForm } from "./AddForm";

export default function ModalItemAdd() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <Button onClick={openModal}>
        <Plus />
        Adicionar
      </Button>

      {modal && <AddForm closeModal={closeModal} />}
    </div>
  );
}
