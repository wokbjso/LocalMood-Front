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
    privacy: boolean;
    keyword: string[];
  };
  onClick?: (keyword: string) => void;
}

export default function CurationMakeKeyword({
  curationMakeData,
  onClick,
}: CurationMakeKeywordProps) {
  console.log(curationMakeData);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const handleKeywordFilterClick = (keyword: string) => {
    onClick && onClick(keyword);
  };

  const checkDoneAble = () => {
    if (curationMakeData.curation_name === "") return true;
    return false;
  };

  const handleDoneClick = async () => {
    const res = await fetch("/api/curation/make", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...curationMakeData,
        keyword: curationMakeData.keyword.join(","),
      }),
    });
  };
  return (
    <div className="pb-[22.1rem] w-full">
      <div className="w-full pb-[1.2rem] border-b border-text-gray-3">
        <div className="flex items-center justify-between flex-start">
          <div className="flex gap-[0.6rem]">
            <div className="flex headline3-semibold">
              <span className="text-primary-normal">#&nbsp;</span>
              <span>대표키워드 설정</span>
            </div>
            <span className="headline3-semibold text-text-gray-6">
              {curationMakeData.keyword.length}
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
                        selected={curationMakeData.keyword.includes(keyword)}
                        onClick={() => handleKeywordFilterClick(keyword)}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center fixed w-full bottom-0 right-0 h-[9.4rem] bg-white">
        <Button disabled={checkDoneAble()} onClick={handleDoneClick}>
          완료
        </Button>
      </div>
    </div>
  );
}
