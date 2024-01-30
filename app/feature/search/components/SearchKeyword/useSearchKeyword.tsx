"use client";

import { KOREAN_OPTION } from "@feature/search/constants/search-keywords";
import { useEffect, useState } from "react";

export default function useSearchKeyword() {
  const [cafeKeyword, setCafeKeyword] = useState<{ [key: string]: string }>({
    type: "CAFE",
    subType: "",
    purpose: "",
    mood: "",
    music: "",
    interior: "",
    visitor: "",
    optServ: "",
    dish: "",
    disDesc: "",
  });
  const [restaurantKeyword, setRestaurantKeyword] = useState<{
    [key: string]: string;
  }>({
    type: "RESTAURANT",
    subType: "",
    purpose: "",
    mood: "",
    music: "",
    interior: "",
    visitor: "",
    optServ: "",
    dish: "",
    disDesc: "",
  });
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [showResultAble, setShowResultAble] = useState<boolean>(false);
  const [openKoreanOption, setOpenKoreanOption] = useState(false);
  const [koreanOptionIndex, setKoreanOptionIndex] = useState(0);

  const handleKeywordData = (category: string, keyword: string) => {
    if (tabIndex === 0) {
      if (keyword === "한식") {
        if (restaurantKeyword[category] === keyword) {
          setRestaurantKeyword({
            ...restaurantKeyword,
            [category]: "",
            dish: "",
          });
        } else {
          setRestaurantKeyword({
            ...restaurantKeyword,
            [category]: keyword,
            dish: KOREAN_OPTION[koreanOptionIndex],
          });
        }
      } else if (restaurantKeyword[category] === keyword) {
        setOpenKoreanOption(false);
        setRestaurantKeyword({
          ...restaurantKeyword,
          [category]: "",
          dish: "",
        });
      } else {
        setOpenKoreanOption(false);
        setRestaurantKeyword({
          ...restaurantKeyword,
          [category]: keyword,
          dish: "",
        });
      }
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
      dish: KOREAN_OPTION[index],
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
