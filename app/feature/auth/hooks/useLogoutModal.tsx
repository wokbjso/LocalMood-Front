import { useState } from "react";

export default function UseLogoutModal() {
  const [isOpened, setIsOpened] = useState(false);

  const openModal = () => {
    setIsOpened(true);
  };

  const closeModal = () => {
    setIsOpened(false);
  };

  return {
    isOpened,
    openModal,
    closeModal,
  };
}
