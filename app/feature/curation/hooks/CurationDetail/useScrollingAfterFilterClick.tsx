import { useState } from "react";

export default function UseScrollingAfterFilterClick() {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);

  const changeIsScrolling = (state: boolean) => {
    setIsScrolling(state);
  };

  return { isScrolling, changeIsScrolling };
}
