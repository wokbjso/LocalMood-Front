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
  const [restaurantKeyword, setRestaurantKeyword] = useState<{
    [key: string]: string;
  }>({
    type: "restaurant",
    food: "",
    purpose: "",
    max_people: "",
    mood: "",
    drinks: "",
    music: "",
    service: "",
  });
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleKeywordData = (category: string, keyword: string) => {
    if (tabIndex === 0) {
      if (restaurantKeyword[category] === keyword)
        setRestaurantKeyword({ ...restaurantKeyword, [category]: "" });
      else setRestaurantKeyword({ ...restaurantKeyword, [category]: keyword });
    } else if (tabIndex === 1) {
      if (cafeKeyword[category] === keyword)
        setCafeKeyword({ ...cafeKeyword, [category]: "" });
      else setCafeKeyword({ ...cafeKeyword, [category]: keyword });
    } else return;
  };

  const handleTabIndex = (index: number) => {
    setTabIndex(index);
  };

  return {
    cafeKeyword,
    restaurantKeyword,
    tabIndex,
    handlers: {
      changeTabIndex: handleTabIndex,
      changeKeywordData: handleKeywordData,
    },
  };
}
