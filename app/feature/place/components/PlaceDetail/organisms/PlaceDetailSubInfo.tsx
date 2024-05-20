"use client";

import { useState } from "react";
import { PlaceDetailInfoProps } from "@/feature/place/queries/dto/place-detail";
import ArrowDownIcon from "@/common/assets/icons/arrow/ArrowDownIcon";
import ArrowUpIcon from "@/common/assets/icons/arrow/ArrowUpIcon";
import TextWithDivider from "@/common/components/ui/text/TextWithDivider";
import { twMerge } from "tailwind-merge";
import PlaceDetailSubInfoMore from "./PlaceDetailSubInfoMore";

//Organism
export default function PlaceDetailSubInfo({
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

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center">
          {visitorNum && optionalService && (
            <TextWithDivider
              leftText={visitorNum}
              rightText={optionalService}
              leftTextClassName="body2-medium text-text-gray-8"
              rightTextClassName="text-text-gray-8"
              className={twMerge(
                "pl-[20px]",
                openMoreDetail ? "pt-[18px]" : ""
              )}
            />
          )}
          {visitorNum && !optionalService && (
            <span
              className={twMerge(
                "body2-medium text-text-gray-8 px-[2rem] pt-[24px]",
                !openMoreDetail ? "pb-[20px]" : ""
              )}
            >
              {visitorNum}
            </span>
          )}
        </div>
        {dishDesc !== "NULL" && (
          <div
            onClick={moreButtonClicked}
            className={twMerge(
              "px-[2rem] pt-[24px]",
              !openMoreDetail ? "pb-[20px]" : ""
            )}
          >
            {openMoreDetail ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </div>
        )}
      </div>
      {openMoreDetail && dishDesc !== "NULL" && (
        <PlaceDetailSubInfoMore type={type} dishDesc={dishDesc} />
      )}
    </div>
  );
}
