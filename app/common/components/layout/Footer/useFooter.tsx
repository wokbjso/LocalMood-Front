import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useFooter() {
  const pathname = usePathname();
  const searchPattern = /^\/search(\/.*)?$/;
  const recordPattern = /^\/record(\/.*)?$/;
  const curationPattern = /^\/curation(\/.*)?$/;
  const [footerIndex, setFooterIndex] = useState<number>(
    pathname === "/" || searchPattern.test(pathname)
      ? 0
      : recordPattern.test(pathname)
      ? 1
      : curationPattern.test(pathname)
      ? 2
      : pathname === "/mypage"
      ? 3
      : -1
  );

  const changeFooterIndex = (index: number) => {
    setFooterIndex(index);
  };

  useEffect(() => {}, [pathname]);

  return {
    footerIndex,
    changeFooterIndex,
  };
}
