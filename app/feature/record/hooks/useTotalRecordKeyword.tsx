import { useState } from "react";

export default function UseTotalRecordKeyword(placeType: string) {
  const [indicatorIndex, setIndicatorIndex] = useState(0);
  const [nextDirection, setNextDirection] = useState("");
  const [cafeKeywordData, setCafeKeywordData] = useState<{
    [key: string]: any;
  }>({
    purpose: "",
    mood: "",
    music: "",
    interior: "",
    positiveEval: [],
    negativeEval: [],
    files: [],
  });
  const [restaurantKeywordData, setRestaurantKeywordData] = useState<{
    [key: string]: any;
  }>({
    purpose: "",
    mood: "",
    music: "",
    interior: "",
    positiveEval: [],
    negativeEval: [],
    files: [],
  });

  const handleIndicatorIndex = (index: number) => {
    setIndicatorIndex(index);
  };

  const handleNextDirection = (direction: string) => {
    setNextDirection(direction);
  };

  const handleKeyword = (category: string, keyword: string) => {
    if (placeType === "CAFE") {
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
    } else if (placeType === "RESTAURANT") {
      if (Array.isArray(restaurantKeywordData[category])) {
        if (restaurantKeywordData[category].includes(keyword)) {
          setRestaurantKeywordData((prevData) => {
            return {
              ...prevData,
              [category]: (prevData[category] as string[]).filter(
                (like) => like !== keyword
              ),
            };
          });
        } else {
          if (restaurantKeywordData[category].length === 3) {
            alert("최대 3개까지 선택 가능해요!");
            return;
          }
          setRestaurantKeywordData((prevData) => {
            return {
              ...prevData,
              [category]: [...prevData[category], keyword],
            };
          });
        }
      } else if (restaurantKeywordData[category] === keyword) {
        setRestaurantKeywordData({ ...restaurantKeywordData, [category]: "" });
      } else {
        setRestaurantKeywordData({
          ...restaurantKeywordData,
          [category]: keyword,
        });
      }
    }
  };

  const handleAddImage = (file: File) => {
    if (placeType === "CAFE") {
      setCafeKeywordData({
        ...cafeKeywordData,
        files: [...cafeKeywordData.files, file],
      });
    } else if (placeType === "RESTAURANT") {
      setRestaurantKeywordData({
        ...restaurantKeywordData,
        files: [...restaurantKeywordData.files, file],
      });
    }
  };

  const handleDeleteImage = (index: number) => {
    if (placeType === "CAFE") {
      setCafeKeywordData({
        ...cafeKeywordData,
        files: cafeKeywordData.files.filter((_: any, i: number) => index !== i),
      });
    } else if (placeType === "RESTAURANT") {
      setRestaurantKeywordData({
        ...restaurantKeywordData,
        files: restaurantKeywordData.files.filter(
          (_: any, i: number) => index !== i
        ),
      });
    }
  };
  return {
    indicatorIndex,
    nextDirection,
    cafeKeywordData,
    restaurantKeywordData,
    handlers: {
      handleKeyword,
      handleNextDirection,
      handleIndicatorIndex,
      handleAddImage,
      handleDeleteImage,
    },
  };
}
