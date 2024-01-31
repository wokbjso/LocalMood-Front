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
  variant,
  direction,
  size,
  name,
  imgUrl,
  type,
  address,
  isScraped,
  onClick,
  className,
  imgClassName,
}: PlaceInfoProps) {
  //scrap 유무를 default useState 값으로 설정
  const [scrapState, setScrapState] = useState<boolean>(isScraped);
  const handleScrap = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    setScrapState((prev) => !prev);
    if (scrapState) {
      const res = await fetch(`/api/place/scrapped/delete/${String(id)}`, {
        method: "DELETE",
      });
    } else {
      const uid = 1;
      const res = await fetch(`/api/place/scrapped/add/${uid}`, {
        method: "POST",
      });
      console.log(res);
    }
    //장소 id 활용하여 api 문서에 맞게 해당 장소 scrap 상태 변경 api 호출(client side - tanstack query)
  };
  return (
    <Link
      href={{
        pathname: variant === "main" ? `/place/${id}` : `/record/select/${id}`,
        query: variant === "record" ? { type, name } : null,
      }}
    >
      <div
        className={twMerge(
          "w-full relative",
          direction === "horizontal" && "flex items-center",
          className
        )}
        onClick={onClick}
      >
        <div
          className={twMerge(
            "w-full h-[16rem] relative",
            direction === "horizontal" && "w-[8rem] h-[8rem] mr-[1.6rem]"
          )}
        >
          <Image
            src={
              "https://a.cdn-hotels.com/gdcs/production161/d1403/b5f1876a-9e64-4d13-ab7a-a0fd2cbc5224.jpg"
            } // 이미지 들어가면 해당 이미지로 교체
            alt="공간 사진"
            fill
            sizes="100vw"
            className={twMerge("rounded-[8px]", imgClassName)}
          />
        </div>
        <div
          className={twMerge("flex-col", size === "normal" ? "relative" : null)}
        >
          <div
            className={twMerge(
              direction === "vertical" && "w-[90%] pt-[1.6rem]",
              size === "normal" ? "headline2" : "headline3"
            )}
          >
            <span>{name}</span>
            <div className="flex items-center mt-[0.8rem]">
              <span
                className={twMerge(
                  "text-text-gray-6",
                  size === "normal" ? "body2-semibold" : "body3-semibold"
                )}
              >
                {type === "RESTAURANT" ? "음식점" : "카페"}
              </span>
              <Line className="mx-[0.8rem]" />
              <span
                className={twMerge(
                  "text-text-gray-5",
                  size === "normal" ? "body2-medium" : "body3-medium"
                )}
              >
                {address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
