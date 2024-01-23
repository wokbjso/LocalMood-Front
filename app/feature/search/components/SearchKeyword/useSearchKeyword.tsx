"use client";

import { KOREAN_OPTION } from "@feature/search/constants/search-keywords";
import { useEffect, useState } from "react";

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
  const [showResultAble, setShowResultAble] = useState<boolean>(false);
  const [openKoreanOption, setOpenKoreanOption] = useState(false);
  const [koreanOptionIndex, setKoreanOptionIndex] = useState(0);

  const handleKeywordData = (category: string, keyword: string) => {
    if (tabIndex === 0) {
      if (keyword === "한식") {
        if (restaurantKeyword[category] === KOREAN_OPTION[koreanOptionIndex])
          setRestaurantKeyword({
            ...restaurantKeyword,
            [category]: "",
          });
        else
          setRestaurantKeyword({
            ...restaurantKeyword,
            [category]: KOREAN_OPTION[koreanOptionIndex],
          });
      } else if (restaurantKeyword[category] === keyword)
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

  const handleOpenKoreanOption = (state: boolean) => {
    setOpenKoreanOption(state);
  };

  const handleKoreanOptionIndex = (index: number) => {
    setRestaurantKeyword({
      ...restaurantKeyword,
      food: KOREAN_OPTION[index],
    });
    setKoreanOptionIndex(index);
  };

  useEffect(() => {
    if (tabIndex === 0)
      setShowResultAble(
        Object.keys(restaurantKeyword)
          .filter((keyword) => keyword !== "type")
          .some((keyword) => restaurantKeyword[keyword] !== "")
      );
    else if (tabIndex === 1)
      setShowResultAble(
        Object.keys(cafeKeyword)
          .filter((keyword) => keyword !== "type")
          .some((keyword) => cafeKeyword[keyword] !== "")
      );
    else return;
  }, [tabIndex, cafeKeyword, restaurantKeyword]);
  return {
    cafeKeyword,
    restaurantKeyword,
    tabIndex,
    openKoreanOption,
    koreanOptionIndex,
    showResultAble,
    handlers: {
      changeTabIndex: handleTabIndex,
      changeKeywordData: handleKeywordData,
      changeOpenKoreanOption: handleOpenKoreanOption,
      changeKoreanOptionIndex: handleKoreanOptionIndex,
    },
  };
}
