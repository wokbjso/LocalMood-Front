"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slick.css";
import dynamic from "next/dynamic";
import Slider from "react-slick";
import { CurationProps } from "@/feature/curation/type";
const CurationInfoCardLight = dynamic(
  () =>
    import(
      "@/feature/curation/components/CurationInfo/organisms/CurationInfoCardLight"
    )
);

interface PopularCurationSlickSliderProps {
  curationList: Omit<CurationProps, "privacy">[];
}

export default function PopularCurationSlickSlider({
  curationList,
}: PopularCurationSlickSliderProps) {
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
    <Slider {...sliderSettings} className="px-[2rem]">
      {curationList.map((curation, i) => (
        <CurationInfoCardLight
          key={curation.author + i}
          {...curation}
          className="mb-[2rem] w-[100%]"
        />
      ))}
    </Slider>
  );
}
