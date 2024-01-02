"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Line from "@common/assets/icons/line/line.svg";
import ScrapLine from "@common/assets/icons/scrap/scrap-line.svg";
import ScrapFill from "@common/assets/icons/scrap/scrap-fill.svg";
import ScrapShadow from "@common/assets/icons/scrap/scrap-shadow.svg";
import { useState } from "react";

interface PlaceInfoProps {
  id: number;
  variant?: string;
  size?: "large" | "small";
  placeName: string;
  placeImg: string;
  category: string;
  location: string;
  scrapped?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function PlaceInfoTop({
  id,
  variant,
  size = "large",
  placeName,
  placeImg,
  category,
  location,
  scrapped = false,
  onClick,
}: PlaceInfoProps) {
  const [isScrapped, setIsScrapped] = useState<boolean>(scrapped);
  const handleScrap = () => {
    setIsScrapped((prev) => !prev);
  };
  return (
    <div className="w-full relative" onClick={onClick}>
      <div
        className={twMerge(
          "w-full h-[16rem] relative",
          variant === "curation" && "h-[28rem]"
        )}
      >
        <Image src={placeImg} alt="공간 사진" fill className="rounded-[8px]" />
      </div>
      <div
        className={twMerge(
          "flex-col mt-[1.6rem]",
          size === "large" && "relative"
        )}
      >
        {scrapped && size === "large" ? (
          !isScrapped ? (
            <ScrapLine
              className="absolute cursor-pointer right-[0.4rem]"
              onClick={handleScrap}
            />
          ) : (
            <ScrapFill
              className="absolute cursor-pointer right-[0.4rem]"
              onClick={handleScrap}
            />
          )
        ) : null}
        {scrapped && size === "small" ? (
          !isScrapped ? (
            <ScrapLine
              className="absolute cursor-pointer top-[1.2rem] right-[1.2rem]"
              onClick={handleScrap}
            />
          ) : (
            <ScrapShadow
              className="absolute cursor-pointer top-[1.2rem] right-[1.2rem]"
              onClick={handleScrap}
            />
          )
        ) : null}
        <div
          className={twMerge(
            size === "large" ? "headline2" : "headline3",
            "mb-[0.8rem]"
          )}
        >
          {placeName}
        </div>
        <div className="flex">
          <span
            className={
              size === "large"
                ? "body2-semibold text-gray-6"
                : "body3-semibold text-gray-7"
            }
          >
            {category}
          </span>
          <Line className="mx-[0.8rem]" />
          <span
            className={
              size === "large"
                ? "body2-medium text-gray-5"
                : "body3-medium text-gray-5"
            }
          >
            {location}
          </span>
        </div>
      </div>
    </div>
  );
}
