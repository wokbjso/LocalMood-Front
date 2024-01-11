import { useState } from "react";

export default function useFooter() {
  const [footerState, setFooterState] = useState<number>(0);

  const handleFooterState = (index: number) => {
    setFooterState(index);
  };

  return {
    footerState,
    handlers: {
      handleFooterState,
    },
  };
}
