import { PLACE_EVALUATIONS } from "@feature/record/constants/evaluate-keywords";
import { useState } from "react";

export default function UseKeyword(placeType: string) {
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

  const hasSomeData =
    placeType === "CAFE"
      ? Object.keys(cafeKeywordData).some((k) => {
          if (typeof cafeKeywordData[k] === "string")
            return cafeKeywordData[k] !== "";
          else if (Array.isArray(cafeKeywordData[k]))
            return cafeKeywordData[k].length > 0;
          return false;
        })
      : Object.keys(restaurantKeywordData).some((k) => {
          if (typeof restaurantKeywordData[k] === "string")
            return restaurantKeywordData[k] !== "";
          else if (Array.isArray(restaurantKeywordData[k]))
            return restaurantKeywordData[k].length > 0;
          return false;
        });

  const checkJump = () => {
    if (indicatorIndex === 0) {
      if (placeType === "CAFE") {
        return (
          Object.keys(cafeKeywordData).filter(
            (category) =>
              typeof cafeKeywordData[category] === "string" &&
              cafeKeywordData[category] !== ""
          ).length === 0
        );
      } else if (placeType === "RESTAURANT") {
        return (
          Object.keys(restaurantKeywordData).filter(
            (category) =>
              typeof restaurantKeywordData[category] === "string" &&
              restaurantKeywordData[category] !== ""
          ).length === 0
        );
      }
    } else if (indicatorIndex === 1) {
      if (placeType === "CAFE") {
        return (
          Object.keys(PLACE_EVALUATIONS).filter(
            (category) => cafeKeywordData[category].length === 0
          ).length === 2
        );
      } else if (placeType === "RESTAURANT") {
        return (
          Object.keys(PLACE_EVALUATIONS).filter(
            (category) => restaurantKeywordData[category].length === 0
          ).length === 2
        );
      }
    } else if (indicatorIndex === 2) {
      return true;
    }
  };

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
    hasSomeData,
    checkJump,
    handlers: {
      handleKeyword,
      handleNextDirection,
      handleIndicatorIndex,
      handleAddImage,
      handleDeleteImage,
    },
  };
}
