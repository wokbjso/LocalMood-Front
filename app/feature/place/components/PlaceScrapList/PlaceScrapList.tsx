"use client";

import { PlaceScrappedResponse } from "@feature/place/queries/dto/place-scrapped";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const PlaceInfoMain = dynamic(() => import("../PlaceInfoMain/PlaceInfoMain"));

export default function PlaceScrapList({
  data,
}: {
  data: PlaceScrappedResponse | null;
}) {
  useEffect(() => {
    if (!data) {
      location.replace("/login");
    }
  }, [data]);
  return (
    <div className="flex overflow-x-scroll px-[2rem] gap-[0.8rem] overflow-y-hidden h-[40%]">
      {data?.length === 0 && (
        <div className="flex items-center justify-center w-full">
          <p className="body1-medium text-text-gray-8">
            아직 스크랩한 공간이 없습니다.
          </p>
        </div>
      )}
      {data &&
        data.map((li, index) => (
          <div key={index}>
            <PlaceInfoMain
              variant="record"
              size="small"
              {...li}
              className="w-[16.3rem]"
            />
          </div>
        ))}
    </div>
  );
}
