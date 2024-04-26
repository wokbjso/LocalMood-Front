"use client";

import { KOREAN_OPTION } from "@feature/search/constants/search-keywords";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

//hook
export default function useSearchKeywordModal() {
  const searchParams = useSearchParams();
  const keywordParam = searchParams.get("keyword");
  const parsedKeyword = JSON.parse(keywordParam as string);

  const [cafeKeyword, setCafeKeyword] = useState<{ [key: string]: string }>(
    keywordParam && parsedKeyword["type"] === "CAFE"
      ? parsedKeyword
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
    keywordParam && parsedKeyword["type"] === "RESTAURANT"
      ? parsedKeyword
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
    keywordParam && parsedKeyword["type"] === "CAFE" ? 1 : 0
  );
  const [showResultAble, setShowResultAble] = useState<boolean>(false);
  const [openKoreanOption, setOpenKoreanOption] = useState(
    keywordParam && parsedKeyword["subType"] === "한식" ? true : false
  );
  const [koreanOptionIndex, setKoreanOptionIndex] = useState(
    keywordParam && parsedKeyword["subType"] === "한식"
      ? KOREAN_OPTION.indexOf(restaurantKeyword["dish"])
      : 0
  );

  const handleKeywordData = (category: string, keyword: string) => {
    if (tabIndex === 0) {
      if (restaurantKeyword[category] === keyword) {
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

  const handleRestaurantSubType = (keyword: string) => {
    if (keyword === "한식") {
      if (restaurantKeyword["subType"] === keyword) {
        setOpenKoreanOption(false);
        setRestaurantKeyword({
          ...restaurantKeyword,
          subType: "ALL",
          dish: "ALL",
        });
      } else {
        setOpenKoreanOption(true);
        setRestaurantKeyword({
          ...restaurantKeyword,
          subType: keyword,
          dish: KOREAN_OPTION[koreanOptionIndex],
        });
      }
    } else {
      if (restaurantKeyword["subType"] === keyword) {
        setRestaurantKeyword({
          ...restaurantKeyword,
          subType: "ALL",
        });
      } else {
        setOpenKoreanOption(false);
        setRestaurantKeyword({
          ...restaurantKeyword,
          subType: keyword,
          dish: "ALL",
        });
      }
    }
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
      handleRestaurantSubType,
      handleOpenKoreanOption,
      handleKoreanOptionIndex,
    },
  };
}
