"use client";

import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import Line from "@common/assets/icons/line/line.svg";
import ArrowDown from "@common/assets/icons/arrow/arrow-down.svg";
import ArrowUp from "@common/assets/icons/arrow/ArrowUp";
import { PlaceInfoProps } from "@feature/place/type";
import { useState } from "react";
import { PLACE_SUB_TYPE } from "@feature/place/constants/place-tag-category";

export default function PlaceDetailInfo({
  id,
  name,
  type,
  subType,
  address,
  isScraped,
  visitorNum,
  optionalService,
  dish,
  dishDesc,
}: Pick<
  PlaceInfoProps,
  | "id"
  | "name"
  | "type"
  | "subType"
  | "address"
  | "isScraped"
  | "visitorNum"
  | "dish"
  | "dishDesc"
  | "optionalService"
>) {
  const [openSaveModal, setOpenSaveModal] = useState(false);
  const [scrapState, setScrapState] = useState<boolean>(isScraped);
  const [openMoreDetail, setOpenMoreDetail] = useState(false);
  const moreButtonClicked = () => {
    setOpenMoreDetail((prev) => !prev);
  };
  const formattedDishDesc = dishDesc?.split(",").join("・");

  return (
    <div className="flex-col px-[2rem] relative">
      <div className="headline2 mb-[0.8rem]">{name}</div>
      <div className="flex">
        <span className="body2-semibold text-text-gray-6">
          {type === "CAFE" ? "카페" : subType && PLACE_SUB_TYPE[subType]}
        </span>
        <Line className="mx-[0.8rem]" />
        <span className="body2-medium text-text-gray-5">{address}</span>
      </div>
      <div className="w-full flex items-center body2-medium text-text-gray-8 pt-[2.4rem]">
        <div className="w-full">
          <div className="flex items-center  justify-between">
            <div className="inline-flex items-center gap-[0.6rem]">
              <span>{visitorNum}</span>
              {optionalService && <Line className="mx-[0.8rem]" />}
              <span>{optionalService}</span>
            </div>
            {formattedDishDesc !== "NULL" && (
              <div onClick={moreButtonClicked}>
                {openMoreDetail ? <ArrowUp /> : <ArrowDown />}
              </div>
            )}
          </div>
          {openMoreDetail && formattedDishDesc !== null ? (
            <div className="pt-[1.2rem]">
              {type === "CAFE" ? "🍰" : "🍷"}
              &nbsp; &nbsp;
              <span>{formattedDishDesc}</span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
