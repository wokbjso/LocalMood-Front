"use client";
import React, { useState } from "react";
import ArrowDownIcon from "@common/assets/icons/arrow/arrow-down.svg";
import ArrowUpIcon from "@common/assets/icons/arrow/ArrowUp";
import Chip from "@common/components/ui/buttons/Chip/Chip";
import {
  CURATION_INTERIOR,
  CURATION_MOOD,
  CURATION_MUSIC,
  CURATION_PURPOSE,
} from "@feature/curation/constants/curation-make";
import Filter from "@common/components/ui/buttons/Filter/Filter";

export default function CurationMakeKeyword() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  return (
    <div className="pb-[17.1rem]">
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
              {CURATION_PURPOSE.map((purpose) => (
                <Filter key={purpose} label={purpose} />
              ))}
            </div>
          </div>
          <div className="headline3-semibold mb-[4rem]">
            <div>공간의 무드</div>
            <div className="pt-[1.2rem] inline-flex items-start content-start flex-wrap gap-[0.8rem]">
              {CURATION_MOOD.map((mood) => (
                <Filter key={mood} label={mood} />
              ))}
            </div>
          </div>
          <div className="headline3-semibold mb-[4rem]">
            <div>배경음악</div>
            <div className="pt-[1.2rem] inline-flex items-start content-start flex-wrap gap-[0.8rem]">
              {CURATION_MUSIC.map((music) => (
                <Filter key={music} label={music} />
              ))}
            </div>
          </div>
          <div className="headline3-semibold mb-[4rem]">
            <div>인테리어</div>
            <div className="pt-[1.2rem] inline-flex items-start content-start flex-wrap gap-[0.8rem]">
              {CURATION_INTERIOR.map((interior) => (
                <Filter key={interior} label={interior} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
