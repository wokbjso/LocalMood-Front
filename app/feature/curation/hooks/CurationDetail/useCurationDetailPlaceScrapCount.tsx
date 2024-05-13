import { useState } from "react";

export default function UseCurationDetailPlaceScrapCount() {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount((prev) => prev + 1);
  };

  return { count, plusCount };
}
