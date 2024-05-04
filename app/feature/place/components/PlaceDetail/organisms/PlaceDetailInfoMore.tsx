"use client";

import { useState } from "react";
import { PlaceDetailInfoProps } from "@feature/place/queries/dto/place-detail";
import ArrowDownIcon from "@common/assets/icons/arrow/ArrowDownIcon";
import ArrowUpIcon from "@common/assets/icons/arrow/ArrowUpIcon";
import LineIcon from "@common/assets/icons/line/LineIcon";

//Organism
export default function PlaceDetailInfoMore({
  type,
  visitorNum,
  optionalService,
  dishDesc,
}: Pick<
  PlaceDetailInfoProps,
  "type" | "visitorNum" | "optionalService" | "dishDesc"
>) {
  const [openMoreDetail, setIsOpened] = useState(false);

  const moreButtonClicked = () => {
    setIsOpened((prev) => !prev);
  };

  const formattedDishDesc = dishDesc?.split(",").join("・");

  return (
    <div className="w-full flex items-center body2-medium text-text-gray-8 pt-[2.4rem]">
      <div className="w-full">
        <div className="flex items-center  justify-between">
          <div className="inline-flex items-center gap-[0.6rem]">
            <span>{visitorNum}</span>
            {optionalService && <LineIcon className="mx-[0.8rem]" />}
            <span>{optionalService}</span>
          </div>
          {formattedDishDesc !== "NULL" && (
            <div onClick={moreButtonClicked}>
              {openMoreDetail ? <ArrowUpIcon /> : <ArrowDownIcon />}
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
  );
}
