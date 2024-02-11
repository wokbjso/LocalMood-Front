import { useEffect, useRef, useState } from "react";

export default function UseGetWidth<U extends HTMLElement>() {
  const ref = useRef<U>(null);
  const [width, setWidth] = useState(ref.current?.clientWidth);

  useEffect(() => {
    setWidth(ref.current?.clientWidth);
  }, [ref.current?.clientWidth]);

  return { ref, width };
}
