"use client";

import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import Line from "@common/assets/icons/line/line.svg";
import { PlaceInfoProps } from "@feature/place/type";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import { useState } from "react";

export default function PlaceDetailInfo({
  id,
  name,
  type,
  address,
  isScraped,
}: Pick<PlaceInfoProps, "id" | "name" | "type" | "address" | "isScraped">) {
  const [scrapState, setScrapState] = useState<boolean>(isScraped);
  const scrapIconClicked = () => {
    setScrapState((prev) => !prev);
  };
  return (
    <div className="flex-col px-[2rem] relative">
      {!scrapState ? (
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
      <div className="headline2 mb-[0.8rem]">{name}</div>
      <div className="flex">
        <span className="body2-semibold text-text-gray-6">{type}</span>
        <Line className="mx-[0.8rem]" />
        <span className="body2-medium text-text-gray-5">{address}</span>
      </div>
    </div>
  );
}
