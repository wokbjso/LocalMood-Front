import { useState } from "react";

export default function UseMap() {
  const [isOpened, setIsOpened] = useState(false);

  const openMap = () => {
    setIsOpened(true);
  };

  const closeMap = () => {
    setIsOpened(false);
  };

  return {
    isOpened,
    openMap,
    closeMap,
  };
}
