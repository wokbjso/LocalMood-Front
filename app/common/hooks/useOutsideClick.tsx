import { useEffect, useRef } from "react";

export default function UseOutsideClick<U extends HTMLElement>(
  isModalOpen: boolean,
  handleFn: (state: boolean) => void
) {
  const ref = useRef<U>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        isModalOpen &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        handleFn(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleFn, isModalOpen]);

  return { ref };
}
