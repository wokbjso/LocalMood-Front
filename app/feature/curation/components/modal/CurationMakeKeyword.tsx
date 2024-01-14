"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@common/assets/icons/arrow/arrow-down.svg";
import ArrowUpIcon from "@common/assets/icons/arrow/ArrowUp";
import Chip from "@common/components/ui/buttons/Chip/Chip";

export default function CurationMakeKeyword() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <div className="pb-[97.1rem]">
      <div className="w-full pb-[1.2rem] border-b border-text-gray-3">
        <div className="flex items-center justify-between flex-start">
          <div className="flex gap-[0.6rem]">
            <div className="flex headline3-semibold">
              <p className="text-primary-normal">#&nbsp;</p>
              <p>대표키워드 설정</p>
            </div>
            <p className="headline3-semibold text-text-gray-6">0/2</p>
          </div>
          <div onClick={toggleExpansion}>
            {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="pt-[3.2rem] flex flex-col items-start">
          <div className="headline3-semibold mb-[4rem]">
            <div>방문목적</div>
            <div className="pt-[1.2rem] inline-flex items-start content-start flex-wrap gap-[0.8rem]">
              <Chip variant="keywordSelected">연인과의 데이트</Chip>
              <Chip variant="keywordNonSelected">친구/가족과의 만남</Chip>
              <Chip variant="keywordNonSelected">작업/공부/책</Chip>
              <Chip variant="keywordNonSelected">비즈니스</Chip>
              <Chip variant="keywordNonSelected">가족 모임</Chip>
            </div>
          </div>
          <div className="headline3-semibold mb-[4rem]">
            <div>공간의 무드</div>
            <div className="pt-[1.2rem] inline-flex items-start content-start flex-wrap gap-[0.8rem]">
              <Chip variant="keywordSelected">대화에 집중할 수 있는</Chip>
              <Chip variant="keywordNonSelected">왁자지껄 떠들 수 있는</Chip>
              <Chip variant="keywordNonSelected">문화예술을 즐길 수 있는</Chip>
            </div>
          </div>
          <div className="headline3-semibold mb-[4rem]">
            <div>배경음악</div>
            <div className="pt-[1.2rem] inline-flex items-start content-start flex-wrap gap-[0.8rem]">
              <Chip variant="keywordSelected">배경음악 없음</Chip>
              <Chip variant="keywordNonSelected">잔잔한 음악</Chip>
              <Chip variant="keywordNonSelected">큰 음악</Chip>
            </div>
          </div>
          <div className="headline3-semibold mb-[4rem]">
            <div>인테리어</div>
            <div className="pt-[1.2rem] inline-flex items-start content-start flex-wrap gap-[0.8rem]">
              <Chip variant="keywordSelected">연인과의 데이트</Chip>
              <Chip variant="keywordNonSelected">친구/가족과의 만남</Chip>
              <Chip variant="keywordNonSelected">작업/공부/책</Chip>
              <Chip variant="keywordNonSelected">비즈니스</Chip>
              <Chip variant="keywordNonSelected">가족 모임</Chip>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
