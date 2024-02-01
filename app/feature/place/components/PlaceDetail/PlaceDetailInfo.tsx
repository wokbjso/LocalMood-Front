"use client";

import ScrapLine from "@common/assets/icons/scrap/ScrapLine";
import Line from "@common/assets/icons/line/line.svg";
import { PlaceInfoProps } from "@feature/place/type";
import ScrapFill from "@common/assets/icons/scrap/ScrapFill";
import { useState } from "react";
import DeleteSpaceScrap from "@feature/place/queries/deleteScrapSpace";
import { getSession } from "@common/utils/getSession";
import PostSpaceScrap from "@feature/place/queries/postSpaceScrap";
import PlaceDetailTopBar from "./PlaceDetailTopBar";

export default function PlaceDetailInfo({
  id,
  name,
  type,
  address,
  isScraped,
}: Pick<PlaceInfoProps, "id" | "name" | "type" | "address" | "isScraped">) {
  const [scrapState, setScrapState] = useState<boolean>(isScraped);
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
        const res = await PostSpaceScrap(id as number);
        if (res.status === 200) {
          setScrapState((prev) => !prev);
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
          <span className="body2-semibold text-text-gray-6">{type}</span>
          <Line className="mx-[0.8rem]" />
          <span className="body2-medium text-text-gray-5">{address}</span>
        </div>
      </div>
    </>
  );
}
