import { useState } from "react";

export default function UseKeyword(placeType: string) {
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  const [cafeKeywordData, setCafeKeywordData] = useState<{
    [key: string]: string | Array<string>;
  }>({
    purpose: "",
    mood: "",
    music: "",
    interior: "",
    likes: [],
    dislikes: [],
  });
  const [restaurantKeywordData, setRestaurantKeywordData] = useState({
    purpose: "",
    mood: "",
    music: "",
  });

  const handleIndicatorIndex = (index: number) => {
    setIndicatorIndex(index);
  };

  const handleKeyword = (category: string, keyword: string) => {
    if (placeType === "카페") {
      if (Array.isArray(cafeKeywordData[category])) {
        setCafeKeywordData((prevData) => {
          return {
            ...prevData,
            likes: [...prevData.likes, keyword],
          };
        });
      } else if (cafeKeywordData[category] === keyword) {
        setCafeKeywordData({ ...cafeKeywordData, [category]: "" });
      } else {
        setCafeKeywordData({ ...cafeKeywordData, [category]: keyword });
      }
    } else {
    }
  };

  return {
    indicatorIndex,
    cafeKeywordData,
    handlers: {
      changeKeyword: handleKeyword,
      changeIndicatorIndex: handleIndicatorIndex,
    },
  };
}
