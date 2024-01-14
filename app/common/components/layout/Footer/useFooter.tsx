import { usePathname } from "next/navigation";
import { useState } from "react";

export default function useFooter() {
  const pathname = usePathname();
  const [footerState, setFooterState] = useState<number>(
    pathname === "/" ? 0 : pathname === "/mypage" ? 3 : -1
  );

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
