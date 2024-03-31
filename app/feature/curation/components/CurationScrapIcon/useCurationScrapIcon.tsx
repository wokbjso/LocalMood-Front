import { useState } from "react";

export default function useCurationScrapIcon(isScraped: boolean) {
  const [scraped, setScraped] = useState(isScraped);

  const [fetching, setFetching] = useState(false);

  const toggleScrap = () => {
    setScraped((prev) => !prev);
  };

  const toggleFetching = () => {
    setFetching((prev) => !prev);
  };

  return {
    scraped,
    fetching,
    toggleScrap,
    toggleFetching,
  };
}
