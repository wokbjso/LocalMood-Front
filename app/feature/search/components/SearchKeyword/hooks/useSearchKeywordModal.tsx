"use client";

import { KOREAN_OPTION } from "@feature/search/constants/search-keywords";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useSearchKeywordModal() {
  const searchParams = useSearchParams();
  const keywordData = searchParams.get("keyword");
  const [cafeKeyword, setCafeKeyword] = useState<{ [key: string]: string }>(
    keywordData && JSON.parse(keywordData as string)["type"] === "CAFE"
      ? JSON.parse(keywordData as string)
      : {
          type: "CAFE",
          subType: "ALL",
          purpose: "ALL",
          mood: "ALL",
          music: "ALL",
          interior: "ALL",
          visitor: "ALL",
          optServ: "ALL",
          dish: "ALL",
          disDesc: "ALL",
        }
  );
  const [restaurantKeyword, setRestaurantKeyword] = useState<{
    [key: string]: string;
  }>(
    keywordData && JSON.parse(keywordData as string)["type"] === "RESTAURANT"
      ? JSON.parse(keywordData as string)
      : {
          type: "RESTAURANT",
          subType: "ALL",
          purpose: "ALL",
          mood: "ALL",
          music: "ALL",
          interior: "ALL",
          visitor: "ALL",
          optServ: "ALL",
          dish: "ALL",
          disDesc: "ALL",
        }
  );
  const [tabIndex, setTabIndex] = useState<number>(
    keywordData && JSON.parse(keywordData as string)["type"] === "CAFE" ? 1 : 0
  );

  const [showResultAble, setShowResultAble] = useState<boolean>(false);
  const [openKoreanOption, setOpenKoreanOption] = useState(false);
  const [koreanOptionIndex, setKoreanOptionIndex] = useState(0);

  const handleKeywordData = (category: string, keyword: string) => {
    if (tabIndex === 0) {
      if (category === "subType") {
        if (keyword === "한식") {
          if (restaurantKeyword[category] === keyword) {
            setRestaurantKeyword({
              ...restaurantKeyword,
              [category]: "ALL",
              dish: "ALL",
            });
          } else {
            setRestaurantKeyword({
              ...restaurantKeyword,
              [category]: keyword,
              dish: KOREAN_OPTION[koreanOptionIndex],
            });
          }
        } else {
          if (restaurantKeyword[category] === keyword) {
            setRestaurantKeyword({
              ...restaurantKeyword,
              [category]: "ALL",
            });
          } else {
            setOpenKoreanOption(false);
            setRestaurantKeyword({
              ...restaurantKeyword,
              [category]: keyword,
              dish: "ALL",
            });
          }
        }
      } else if (restaurantKeyword[category] === keyword) {
        setRestaurantKeyword({
          ...restaurantKeyword,
          [category]: "ALL",
        });
      } else {
        setRestaurantKeyword({
          ...restaurantKeyword,
          [category]: keyword,
        });
      }
    } else if (tabIndex === 1) {
      if (cafeKeyword[category] === keyword)
        setCafeKeyword({ ...cafeKeyword, [category]: "ALL" });
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
        Object.keys(restaurantKeyword).filter(
          (keyword) =>
            keyword !== "type" && restaurantKeyword[keyword] !== "ALL"
        ).length > 0
      );
    else if (tabIndex === 1)
      setShowResultAble(
        Object.keys(cafeKeyword).filter(
          (keyword) => keyword !== "type" && cafeKeyword[keyword] !== "ALL"
        ).length > 0
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
      handleTabIndex,
      handleKeywordData,
      handleOpenKoreanOption,
      handleKoreanOptionIndex,
    },
  };
}
