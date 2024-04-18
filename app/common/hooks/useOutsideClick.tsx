import { useEffect, useRef } from "react";

export default function UseOutsideClick<U extends HTMLElement>(
  isModalOpen: boolean,
  closeModal: () => void
) {
  const ref = useRef<U>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        isModalOpen &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [closeModal, isModalOpen]);

  return { ref };
}
