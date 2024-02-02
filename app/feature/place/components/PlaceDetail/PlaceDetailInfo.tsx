"use client";

import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import Line from "@common/assets/icons/line/line.svg";
import ArrowDown from "@common/assets/icons/arrow/arrow-down.svg";
import ArrowUp from "@common/assets/icons/arrow/ArrowUp";
import { PlaceInfoProps } from "@feature/place/type";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import { useState } from "react";
import DeleteSpaceScrap from "@feature/place/queries/deleteScrapSpace";
import { getSession } from "@common/utils/getSession";
import PostSpaceScrap from "@feature/place/queries/postSpaceScrap";
import PlaceDetailTopBar from "./PlaceDetailTopBar";
import SaveModal from "@feature/record/components/Modal/SaveModal";
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
  const [openMore, setOpenMore] = useState(false);
  const moreButtonClicked = () => {
    setOpenMore((prev) => !prev);
  };
  const formattedDishDesc = dishDesc?.split(",").join("・");

  const handleScrapClick = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.preventDefault();
    const userInfo = await getSession();
    if (!userInfo) {
      location.replace("/login");
    } else {
      if (scrapState) {
        const res = await DeleteSpaceScrap(id as number);
        if (res.status === 200) {
          setScrapState((prev) => !prev);
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      } else {
        const res = await PostSpaceScrap(id);
        if (res.status === 200) {
          setScrapState(true);
          setOpenSaveModal(true);
        } else {
          alert("에러가 발생했습니다!");
          return;
        }
      }
    }
  };
  return (
    <>
      <PlaceDetailTopBar
        id={id}
        isScraped={scrapState}
        handleScrapState={setScrapState}
        handleOpenSaveModal={setOpenSaveModal}
        className="absolute top-[4.7rem]"
      />
      <div className="flex-col px-[2rem] relative">
        {!scrapState ? (
          <ScrapLine
            className="absolute cursor-pointer right-[2rem] top-[0.5rem]"
            onClick={handleScrapClick}
          />
        ) : (
          <ScrapFill
            className="absolute cursor-pointer right-[2rem] top-[0.5rem]"
            onClick={handleScrapClick}
          />
        )}
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
                  {openMore ? <ArrowUp /> : <ArrowDown />}
                </div>
              )}
            </div>
            {openMore && formattedDishDesc !== null ? (
              <div className="pt-[1.2rem]">
                {type === "CAFE" ? "🍰" : "🍷"}
                &nbsp; &nbsp;
                <span>{formattedDishDesc}</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {openSaveModal && (
        <SaveModal spaceId={id} handleModalFn={setOpenSaveModal} />
      )}
    </>
  );
}
