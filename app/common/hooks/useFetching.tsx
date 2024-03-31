import { useState } from "react";

export default function useFetching() {
  const [isFetching, setIsFetching] = useState(false);

  const toggleFetching = () => {
    setIsFetching((prev) => !prev);
  };

  return {
    isFetching,
    toggleFetching,
  };
}
