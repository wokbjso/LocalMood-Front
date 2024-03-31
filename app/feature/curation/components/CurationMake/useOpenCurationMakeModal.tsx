import { useState } from "react";

export default function useOpenCurationMakeModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return {
    isModalOpen,
    openModal,
    handlers: {
      handleModal: setIsModalOpen,
    },
  };
}
