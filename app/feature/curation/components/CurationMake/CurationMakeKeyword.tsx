"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@common/assets/icons/arrow/arrow-down.svg";
import ArrowUpIcon from "@common/assets/icons/arrow/ArrowUp";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import {
  CURATION_MAKE_CATEGORY,
  CURATION_MAKE_KEYWORD,
} from "@feature/curation/constants/curation-make";
import Button from "@common/components/ui/buttons/Button/Button";

interface CurationMakeKeywordProps {
  curationMakeData: {
    curation_name: string;
    open: boolean;
    keyword: { [key: string]: string };
  };
  onClick?: (category: string, keyword: string) => void;
}

export default function CurationMakeKeyword({
  curationMakeData,
  onClick,
}: CurationMakeKeywordProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const handleKeywordFilterClick = (category: string, keyword: string) => {
    onClick && onClick(category, keyword);
  };

  const isSubmitEnabled = (
    curationMakeData: CurationMakeKeywordProps["curationMakeData"]
  ) => {
    const isTitleEntered = curationMakeData.curation_name.trim() !== "";
    const selectedFiltersCount = Object.keys(curationMakeData.keyword).filter(
      (k) => curationMakeData.keyword[k].length > 0
    ).length;

    return isTitleEntered && selectedFiltersCount >= 2;
  };

  return (
    <div className="pb-[17.1rem]">
      <div className="w-full pb-[1.2rem] border-b border-text-gray-3">
        <div className="flex items-center justify-between flex-start">
          <div className="flex gap-[0.6rem]">
            <div className="flex headline3-semibold">
              <span className="text-primary-normal">#&nbsp;</span>
              <span>대표키워드 설정</span>
            </div>
            <span className="headline3-semibold text-text-gray-6">
              {
                Object.keys(curationMakeData.keyword).filter(
                  (k) => curationMakeData.keyword[k].length > 0
                ).length
              }
              /2
            </span>
          </div>
          <div onClick={toggleExpansion}>
            {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="pt-[3.2rem] flex flex-col items-start">
          {Object.keys(CURATION_MAKE_CATEGORY).map((category) => (
            <div key={category}>
              <div className="headline3-semibold mb-[4rem]">
                <div>{CURATION_MAKE_CATEGORY[category]}</div>
                <div className="pt-[1.2rem] inline-flex items-start content-start flex-wrap gap-[0.8rem]">
                  {CURATION_MAKE_KEYWORD[CURATION_MAKE_CATEGORY[category]].map(
                    (keyword) => (
                      <Filter
                        key={keyword}
                        label={keyword}
                        selected={
                          curationMakeData.keyword[category] === keyword
                        }
                        onClick={() =>
                          handleKeywordFilterClick(category, keyword)
                        }
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="absolute bottom-[4.6rem] left-8 right-8">
        <Button
          variant={"fill"}
          onClick={() => {
            if (isSubmitEnabled(curationMakeData)) {
              console.log("버튼입력");
            } else {
            }
          }}
          className={`w-full ${
            !isSubmitEnabled(curationMakeData)
              ? "bg-text-gray-4 text-background-gray-1"
              : ""
          }`}
        >
          완료
        </Button>
      </div>
    </div>
  );
}
