"use client";

import { useState } from "react";

export default function useSearchKeyword() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };

  return {
    tabIndex,
    handlers: {
      handleTabIndex,
    },
  };
}
