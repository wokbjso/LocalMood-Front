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
    author: string;
    image: string[];
    title: string;
    spaceCount: number;
    keyword: string[];
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
        {/* indicator 인덱스에 맞게 알맞은 큐레이션 띄워줌 */}
        {curationList.map((curation, i) => {
          return (
            indicatorIndex === i && (
              <CurationMain
                key={curation.author + i}
                id={i}
                image={curation.image}
                author={curation.author}
                title={curation.title}
                keyword={curation.keyword}
                spaceCount={curation.spaceCount}
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
