import { useState } from "react";

export default function UseCurationMake() {
  const [curationMakeData, setCurationMakeData] = useState<{
    curation_name: string;
    open: boolean;
    keyword: { [key: string]: string };
  }>({
    curation_name: "",
    open: false,
    keyword: {
      purpose: "",
      mood: "",
      music: "",
      interior: "",
    },
  });

  const handleCurationName = (text: string) => {
    setCurationMakeData({ ...curationMakeData, curation_name: text });
  };

  const handleCurationOpen = (state: boolean) => {
    setCurationMakeData({ ...curationMakeData, open: state });
  };

  const handleKeyword = (category: string, keyword: string) => {
    if (
      Object.keys(curationMakeData.keyword).filter(
        (k) => curationMakeData.keyword[k].length > 0 && k !== category
      ).length === 2
    ) {
      alert("키워드는 2개까지 선택해주세요!");
      return;
    }

    if (curationMakeData.keyword[category] === keyword) {
      setCurationMakeData({
        ...curationMakeData,
        keyword: {
          ...curationMakeData.keyword,
          [category]: "",
        },
      });
    } else {
      setCurationMakeData({
        ...curationMakeData,
        keyword: {
          ...curationMakeData.keyword,
          [category]: keyword,
        },
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
