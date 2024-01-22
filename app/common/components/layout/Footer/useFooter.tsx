import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useFooter() {
  const pathname = usePathname();
  const searchPattern = /^\/search(\/.*)?$/;
  const curationPattern = /^\/curation(\/.*)?$/;
  const [footerState, setFooterState] = useState<number>(
    pathname === "/" || searchPattern.test(pathname)
      ? 0
      : curationPattern.test(pathname)
      ? 2
      : pathname === "/mypage"
      ? 3
      : -1
  );

  const handleFooterState = (index: number) => {
    setFooterState(index);
  };

  useEffect(() => {}, [pathname]);

  return {
    footerState,
    handlers: {
      handleFooterState,
    },
  };
}
