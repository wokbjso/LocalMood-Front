"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";
import PlaceImageSliderCount from "../molecules/PlaceImageSliderCount";

//Organism
export default function PlaceImageSlider({
  imgUrlList,
}: Pick<PlaceDetailInfoProps, "imgUrlList">) {
  const [imgIndex, setImgIndex] = useState(0);
  const sliderSettings = {
    speed: 500,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setImgIndex(next),
  };
  useEffect(() => {
    document.documentElement.style.setProperty("--padding-size", "3rem");
  }, []);
  return (
    <div className="relative w-[100%] overflow-hidden">
      <PlaceImageSliderCount imgIndex={imgIndex} />
      <Slider {...sliderSettings}>
        {imgUrlList.map((image, i) => (
          <div
            key={image + i}
            className="w-[100%] h-[30rem] mb-[1.5rem] relative"
          >
            <Image
              src={image.replace("open?", "uc?export=download&")}
              alt="공간 상세 사진"
              fill
              sizes="100vw"
              priority={i === 0}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              className="object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
