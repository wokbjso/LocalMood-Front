import { useState } from "react";

export default function UseCurationScrapClickCount() {
  const [clickCount, setClickCount] = useState(0);

  const plusClickCount = () => {
    setClickCount((prev) => prev + 1);
  };

  const resetClickCount = () => {
    setClickCount(0);
  };

  return { clickCount, plusClickCount, resetClickCount };
}
