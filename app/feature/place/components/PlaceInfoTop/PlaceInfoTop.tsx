"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Line from "@common/assets/icons/line/line.svg";
import ScrapShadow from "@common/assets/icons/scrap/scrap-shadow.svg";
import { useState } from "react";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import Link from "next/link";

interface PlaceInfoProps {
  id: number;
  placeName: string;
  placeImg: string;
  category: string;
  location: string;
  scrapped: boolean;
  onClick?: () => void;
  className?: string;
  imgClassName?: string;
}

export default function PlaceInfoTop({
  id,
  placeName,
  placeImg,
  category,
  location,
  scrapped,
  onClick,
  className,
}: PlaceInfoProps) {
  //id로 scrap 유무를 default useState 값으로 설정
  const [isScrapped, setIsScrapped] = useState<boolean>(scrapped);
  const handleScrap = () => {
    setIsScrapped((prev) => !prev);
  };
  return (
    <div className={twMerge("w-full relative", className)} onClick={onClick}>
      <div className={twMerge("w-full h-[16rem] relative")}>
        <Link
          href={{
            pathname: `/place/${
              category === "카페" ? "cafe" : "restaurant"
            }/${id}`,
          }}
        >
          <Image
            src={placeImg}
            alt="공간 사진"
            fill
            sizes="100vw"
            className="rounded-[8px]"
          />
        </Link>
      </div>
      <div className="flex-col relative">
        {!isScrapped ? (
          <ScrapLine
            className="absolute cursor-pointer right-[0.4rem] top-[1.6rem]"
            onClick={handleScrap}
          />
        ) : (
          <ScrapFill
            className="absolute cursor-pointer right-[0.4rem] top-[1.6rem]"
            onClick={handleScrap}
          />
        )}
        <Link
          href={{
            pathname: `/place/${
              category === "카페" ? "cafe" : "restaurant"
            }/${id}`,
          }}
        >
          <div className={"headline2 w-[90%] pt-[1.6rem]"}>
            <span>{placeName}</span>
            <div className="flex mt-[0.8rem]">
              <span className={"body2-semibold text-text-gray-6"}>
                {category}
              </span>
              <Line className="mx-[0.8rem]" />
              <span className={"body2-medium text-text-gray-5"}>
                {location}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
