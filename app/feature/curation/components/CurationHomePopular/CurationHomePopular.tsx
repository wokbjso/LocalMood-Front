"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../slick.css";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import RightArrow from "@common/assets/icons/arrow/arrow-right.svg";
import Slider from "react-slick";
import useToast from "@common/components/ui/toast/useToast";
import Toast from "@common/components/ui/toast/Toast";
import CurationCardLight from "../CurationCardLight/CurationCardLight";

interface CurationHomePopularProps {
  mainText: string;
  subText: string;
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

export default function CurationHomePopular({
  mainText,
  subText,
  curationList,
}: CurationHomePopularProps) {
  const sliderSettings = {
    speed: 500,
    dots: true,
    infinite: false,
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
  const { isToastOpen, toastText, openToast } = useToast();
  return (
    <>
      <section className="mb-[5.6rem] pt-[2.8rem] pb-[2rem] bg-background-gray-2">
        <div className="flex justify-between mb-[1.6rem] px-[2rem]">
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
        <Slider {...sliderSettings} className="px-[2rem]">
          {curationList.map((curation, i) => (
            <CurationCardLight
              key={curation.author + i}
              {...curation}
              toastOutside
              outsideOpenToast={openToast}
              className="mb-[2rem] w-[100%]"
            />
          ))}
        </Slider>
      </section>
      <Toast open={isToastOpen} text={toastText} />
    </>
  );
}
