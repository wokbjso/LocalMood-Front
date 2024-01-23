import { useState } from "react";

export default function UseKeyword(placeType: string) {
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  const [cafeKeywordData, setCafeKeywordData] = useState<{
    [key: string]: string;
  }>({
    purpose: "",
    mood: "",
    music: "",
    interior: "",
  });
  const [restaurantKeywordData, setRestaurantKeywordData] = useState({
    purpose: "",
    mood: "",
    music: "",
  });

  const handleKeyword = (category: string, keyword: string) => {
    if (placeType === "카페") {
      if (cafeKeywordData[category] === keyword) {
        setCafeKeywordData({ ...cafeKeywordData, [category]: "" });
      } else {
        setCafeKeywordData({ ...cafeKeywordData, [category]: keyword });
      }
    }
  };

  return {
    indicatorIndex,
    cafeKeywordData,
    handlers: {
      handleKeyword,
    },
  };
}
