import { useState } from "react";

export default function UseKeyword(placeType: string) {
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  const [cafeKeywordData, setCafeKeywordData] = useState<{
    [key: string]: string | string[];
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
        if (cafeKeywordData[category].includes(keyword)) {
          setCafeKeywordData((prevData) => {
            return {
              ...prevData,
              [category]: (prevData[category] as string[]).filter(
                (like) => like !== keyword
              ),
            };
          });
        } else {
          if (cafeKeywordData[category].length === 3) {
            alert("최대 3개까지 선택 가능해요!");
            return;
          }
          setCafeKeywordData((prevData) => {
            return {
              ...prevData,
              [category]: [...prevData[category], keyword],
            };
          });
        }
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
