import { useEffect, useRef } from "react";

export default function UseOutsideClick<U extends HTMLElement>(
  handleFn: (state: boolean) => void
) {
  const ref = useRef<U>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handleFn(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return { ref };
}
