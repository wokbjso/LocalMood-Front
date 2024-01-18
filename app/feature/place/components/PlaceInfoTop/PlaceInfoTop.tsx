"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Line from "@common/assets/icons/line/line.svg";
import { useState } from "react";
import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import Link from "next/link";
import { PlaceInfoProps } from "@feature/place/type";

export default function PlaceInfoTop({
  id,
  size,
  placeName,
  placeImg,
  category,
  location,
  scrapped,
  onClick,
  className,
  imgClassName,
}: PlaceInfoProps) {
  //id로 scrap 유무를 default useState 값으로 설정
  const [isScrapped, setIsScrapped] = useState<boolean>(scrapped);
  const handleScrap = () => {
    setIsScrapped((prev) => !prev);
  };
  return (
    <div className={twMerge("w-full relative", className)} onClick={onClick}>
      <Link
        href={{
          pathname: `/place/${
            category === "카페" ? "cafe" : "restaurant"
          }/${id}`,
        }}
      >
        <div className={twMerge("w-full h-[16rem] relative")}>
          <Image
            src={placeImg}
            alt="공간 사진"
            fill
            sizes="100vw"
            className={twMerge("rounded-[8px]", imgClassName)}
          />
        </div>
      </Link>
      <div
        className={twMerge("flex-col", size === "normal" ? "relative" : null)}
      >
        {!isScrapped ? (
          <ScrapLine
            color={size === "small" ? "white" : undefined}
            className="absolute cursor-pointer right-[0.8rem] top-[1.6rem]"
            onClick={handleScrap}
          />
        ) : (
          <ScrapFill
            color={size === "small" ? "white" : undefined}
            className="absolute cursor-pointer right-[0.8rem] top-[1.6rem]"
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
          <div
            className={twMerge(
              "w-[90%] pt-[1.6rem]",
              size === "normal" ? "headline2" : "headline3"
            )}
          >
            <span>{placeName}</span>
            <div className="flex mt-[0.8rem]">
              <span
                className={twMerge(
                  "text-text-gray-6",
                  size === "normal" ? "body2-semibold" : "body3-semibold"
                )}
              >
                {category}
              </span>
              <Line className="mx-[0.8rem]" />
              <span
                className={twMerge(
                  "text-text-gray-5",
                  size === "normal" ? "body2-medium" : "body3-medium"
                )}
              >
                {location}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
