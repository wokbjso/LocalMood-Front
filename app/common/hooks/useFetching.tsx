import { useState } from "react";

export default function useFetching() {
  const [isFetching, setIsFetching] = useState(false);

  const changeFetching = (state: boolean) => {
    setIsFetching(state);
  };

  return { isFetching, changeFetching };
}
