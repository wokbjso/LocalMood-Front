"use client";

import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import Line from "@common/assets/icons/line/line.svg";
import { PlaceInfoProps } from "@feature/place/type";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import { useState } from "react";
import { usePathname } from "next/navigation";
import path from "path";

export default function PlaceDetailInfo({
  id,
  placeName,
  category,
  location,
  scrapped,
}: Pick<
  PlaceInfoProps,
  "id" | "placeName" | "category" | "location" | "scrapped"
>) {
  const pathname = usePathname();
  console.log(pathname);
  const [isScrapped, setIsScrapped] = useState<boolean>(scrapped);
  const scrapIconClicked = () => {
    setIsScrapped((prev) => !prev);
  };
  return (
    <div className="flex-col px-[2rem] relative">
      {!isScrapped ? (
        <ScrapLine
          className="absolute cursor-pointer right-[2rem] top-[0.5rem]"
          onClick={scrapIconClicked}
        />
      ) : (
        <ScrapFill
          className="absolute cursor-pointer right-[2rem] top-[0.5rem]"
          onClick={scrapIconClicked}
        />
      )}
      <div className="headline2 mb-[0.8rem]">{placeName}</div>
      <div className="flex">
        <span className="body2-semibold text-text-gray-6">{category}</span>
        <Line className="mx-[0.8rem]" />
        <span className="body2-medium text-text-gray-5">{location}</span>
      </div>
    </div>
  );
}
