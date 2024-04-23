"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../slick.css";
import Slider from "react-slick";
import MoreTopBar from "@common/components/ui/topBar/MoreTopBar/MoreTopBar";
import CurationInfoCardLight from "@feature/curation/components/CurationInfo/molecules/CurationInfoCardLight";
import UseDetectPageLeave from "@common/hooks/useDetectPageLeave";
import revalidateCurationScrapRelatedData from "@feature/curation/actions/revalidateCurationScrapRelatedData";
import { useState } from "react";

//Organism
interface CurationHomePopularProps {
  title: string;
  curationList: {
    id: number;
    author: string;
    image: string[];
    title: string;
    spaceCount: number;
    keyword: string[];
    isScrapped: boolean;
  }[];
}

//Organism
export default function HomePopularCuration({
  title,
  curationList,
}: CurationHomePopularProps) {
  const [scrapStateList, setScrapStateList] = useState<boolean[]>(
    Array.from({ length: 5 }, () => false)
  );

  const handleScrapStateList = (state: boolean[]) => {
    setScrapStateList(state);
  };

  UseDetectPageLeave(
    scrapStateList.some((state) => state === true)
      ? revalidateCurationScrapRelatedData
      : undefined
  );

  const sliderSettings = {
    speed: 500,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom",
  };
  return (
    <>
      <section className="mb-[5.6rem] pt-[2.8rem] pb-[2rem] bg-background-gray-2">
        <MoreTopBar title={title} />
        <Slider {...sliderSettings} className="px-[2rem]">
          {curationList.map((curation, i) => (
            <CurationInfoCardLight
              key={curation.author + i}
              {...curation}
              index={i}
              scrapStateList={scrapStateList}
              handleScrapStateList={handleScrapStateList}
              className="mb-[2rem] w-[100%]"
            />
          ))}
        </Slider>
      </section>
    </>
  );
}
