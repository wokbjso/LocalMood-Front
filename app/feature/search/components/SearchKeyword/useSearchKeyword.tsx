"use client";

import { useState } from "react";

export default function useSearchKeyword() {
  const [cafeKeyword, setCafeKeyword] = useState<{ [key: string]: string }>({
    type: "cafe",
    purpose: "",
    mood: "",
    music: "",
    interior: "",
    max_people: "",
    service: "",
    desert: "",
  });
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleKeywordData = (category: string, keyword: string) => {
    if (tabIndex === 1) {
      if (cafeKeyword[category] === keyword)
        setCafeKeyword({ ...cafeKeyword, [category]: "" });
      else setCafeKeyword({ ...cafeKeyword, [category]: keyword });
    }
  };

  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };

  return {
    cafeKeyword,
    tabIndex,
    handlers: {
      changeTabIndex: handleTabIndex,
      changeKeywordData: handleKeywordData,
    },
  };
}
