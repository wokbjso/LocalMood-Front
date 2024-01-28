import { useState } from "react";

export default function UseCurationMake() {
  const [curationMakeData, setCurationMakeData] = useState<{
    curation_name: string;
    privacy: boolean;
    keyword: string[];
  }>({
    curation_name: "",
    privacy: false,
    keyword: [],
  });

  console.log(curationMakeData);

  const handleCurationName = (text: string) => {
    setCurationMakeData({ ...curationMakeData, curation_name: text });
  };

  const handleCurationOpen = (state: boolean) => {
    setCurationMakeData({ ...curationMakeData, privacy: state });
  };

  const handleKeyword = (keyword: string) => {
    if (curationMakeData.keyword.includes(keyword)) {
      setCurationMakeData((prevData) => {
        const updatedKeywords = prevData.keyword.filter(
          (prevKeyword) => prevKeyword !== keyword
        );
        return {
          ...prevData,
          keyword: updatedKeywords,
        };
      });
    } else {
      if (curationMakeData.keyword.length === 2) {
        alert("키워드는 2개까지 선택해주세요!");
        return;
      }
      setCurationMakeData((prevData) => {
        const newKeywords = [...prevData.keyword, keyword];
        return {
          ...prevData,
          keyword: newKeywords,
        };
      });
    }
  };

  return {
    curationMakeData,
    handlers: {
      changeCurationName: handleCurationName,
      changeCurationOpen: handleCurationOpen,
      changeKeyword: handleKeyword,
    },
  };
}
