import { useState } from "react";

export default function useCurationScrapIcon(isScraped: boolean) {
  const [scraped, setScraped] = useState(isScraped);

  const toggleScrap = () => {
    setScraped((prev) => !prev);
  };

  return {
    scraped,
    toggleScrap,
  };
}
