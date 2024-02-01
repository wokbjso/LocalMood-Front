"use client";

import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import RightArrow from "@common/assets/icons/arrow/arrow-right.svg";
import CurationMain from "../CurationMain/CurationMain";
import Indicator from "@common/components/ui/indicator/Indicator";
import UseCurationHomePopular from "./UseCurationHomeList";

interface CurationHomePopularProps {
  mainText: string;
  subText: string;
  curationList: {
    id: number;
    author: string;
    imgUrl: string[];
    title: string;
    spaceCount: number;
    keyword: string[];
    isScrapped: boolean;
  }[];
}

export default function CurationHomePopular({
  mainText,
  subText,
  curationList,
}: CurationHomePopularProps) {
  const { indicatorIndex, handlers } = UseCurationHomePopular();
  // 가로 슬라이드시 indicator 늘어나는 로직 구현 필요
  return (
    <section className="mb-[5.6rem] pt-[2.8rem] pb-[2rem] px-[2rem] bg-background-gray-2">
      <div className="flex justify-between mb-[1.6rem]">
        <span className="headline2 text-black">{mainText}</span>
        <div className="flex items-center headline2 text-black">
          <LinkLayout routeUrl="/curation/popular">
            <span className="mr-[1rem] text-text-gray-6 body2-semibold">
              {subText}
            </span>
          </LinkLayout>
          <RightArrow />
        </div>
      </div>
      <div>
        {curationList.map((curation, i) => {
          return (
            indicatorIndex === i && (
              <CurationMain
                key={curation.author + i}
                {...curation}
                className="mb-[2rem] w-full"
              />
            )
          );
        })}
      </div>
      <Indicator
        indicatorIndex={indicatorIndex}
        className="flex justify-center"
        handleIndicatorIndex={handlers.handleIndicator}
      />
    </section>
  );
}
