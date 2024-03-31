import { useState } from "react";

export default function useOpenMyCurationModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCurationModal = (state: boolean) => {
    setIsModalOpen(state);
  };

  return {
    isModalOpen,
    openModal,
    handlers: {
      handleCurationModal,
    },
  };
}
