import {
  CURATION_MAKE_CATEGORY,
  CURATION_MAKE_KEYWORD,
} from "@/feature/curation/constants/curation-make";
import { useEffect, useState } from "react";

export default function UseCurationMake(
  editMode: boolean,
  curationInfo?: {
    id: number;
    privacy?: boolean;
    keyword: string[];
    title: string;
  }
) {
  const parseInitialKeyword = () => {
    let intialKeyword = {
      purpose: "",
      mood: "",
      music: "",
      interior: "",
    };
    if (editMode && curationInfo?.keyword) {
      CURATION_MAKE_KEYWORD[CURATION_MAKE_CATEGORY["purpose"]].forEach((p) => {
        curationInfo?.keyword.forEach((k) => {
          if (p.trim() === k.trim()) {
            intialKeyword.purpose = k.trim();
          }
        });
      });
      CURATION_MAKE_KEYWORD[CURATION_MAKE_CATEGORY["mood"]].forEach((p) => {
        curationInfo?.keyword.forEach((k) => {
          if (p.trim() === k.trim()) {
            intialKeyword.mood = k.trim();
          }
        });
      });
      CURATION_MAKE_KEYWORD[CURATION_MAKE_CATEGORY["music"]].forEach((p) => {
        curationInfo?.keyword.forEach((k) => {
          if (p.trim() === k.trim()) {
            intialKeyword.music = k.trim();
          }
        });
      });
      CURATION_MAKE_KEYWORD[CURATION_MAKE_CATEGORY["interior"]].forEach((p) => {
        curationInfo?.keyword.forEach((k) => {
          if (p.trim() === k.trim()) {
            intialKeyword.interior = k.trim();
          }
        });
      });
    }
    return intialKeyword;
  };

  const [curationMakeData, setCurationMakeData] = useState<{
    curation_name: string;
    open: boolean;
    keyword: { [key: string]: string };
  }>(
    !editMode
      ? {
          curation_name: "",
          open: false,
          keyword: parseInitialKeyword(),
        }
      : {
          curation_name: curationInfo?.title as string,
          open: curationInfo?.privacy as boolean,
          keyword: parseInitialKeyword(),
        }
  );

  useEffect(() => {
    if (curationInfo?.privacy)
      setCurationMakeData({ ...curationMakeData, open: true });
    else setCurationMakeData({ ...curationMakeData, open: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curationInfo?.privacy]);

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

  const resetCurationMakeData = () => {
    setCurationMakeData({
      curation_name: "",
      open: false,
      keyword: {
        purpose: "",
        mood: "",
        music: "",
        interior: "",
      },
    });
  };

  return {
    curationMakeData,
    resetCurationMakeData,
    handlers: {
      changeCurationName: handleCurationName,
      changeCurationOpen: handleCurationOpen,
      changeKeyword: handleKeyword,
    },
  };
}
