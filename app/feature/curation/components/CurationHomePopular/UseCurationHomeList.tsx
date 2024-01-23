"use client";

import { useState } from "react";

export default function UseCurationHomePopular() {
  const [indicatorIndex, setIndicatorIndex] = useState(0);

  const handleIndicator = (index: number) => {
    setIndicatorIndex(index);
  };

  return {
    indicatorIndex,
    handlers: {
      handleIndicator,
    },
  };
}
