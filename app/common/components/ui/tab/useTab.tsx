"use client";

import { useState } from "react";

export default function useTab() {
  const storageTabIndex =
    typeof window !== undefined
      ? Number(sessionStorage.getItem("curationTabIndex"))
      : undefined;

  const [tabIndex, setTabIndex] = useState(storageTabIndex);

  const changeTabIndex = (index: number) => {
    setTabIndex(index);
    sessionStorage.setItem("curationTabIndex", String(index));
  };

  return {
    tabIndex,
    changeTabIndex,
  };
}
