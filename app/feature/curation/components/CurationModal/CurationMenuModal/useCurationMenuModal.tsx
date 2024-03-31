import { useState } from "react";

export default function useCurationMenuModal() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const openMenuModal = () => {
    setIsMenuModalOpen(true);
  };

  return {
    isMenuModalOpen,
    openMenuModal,
    handlers: {
      handleMenuModalOpen: setIsMenuModalOpen,
    },
  };
}
