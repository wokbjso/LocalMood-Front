import { getSession } from "@common/utils/getSession";
import GetPlaceScrapped from "@feature/place/queries/getPlaceScrapped";
import { useEffect, useState } from "react";
import { PlaceScrappedResponse } from "@feature/place/queries/dto/place-scrapped";
import dynamic from "next/dynamic";
const PlaceInfoMain = dynamic(() => import("../PlaceInfoMain/PlaceInfoMain"));

export default function PlaceScrapList() {
  const [scrappedPlace, setScrappedPlace] = useState<PlaceScrappedResponse>();
  const getScrappedPlace = async () => {
    const userInfo = await getSession();
    if (!userInfo) {
      location.replace("/login");
    } else {
      const data = await GetPlaceScrapped();
      setScrappedPlace(data);
    }
  };
  useEffect(() => {
    getScrappedPlace();
  }, []);
  return (
    <div className="flex overflow-x-scroll px-[2rem] pt-[1.6rem] gap-[0.8rem] overflow-y-hidden h-[40%]">
      {scrappedPlace?.length === 0 && (
        <div className="flex items-center justify-center w-full">
          <p className="body1-medium text-text-gray-8">
            아직 스크랩한 공간이 없습니다.
          </p>
        </div>
      )}
      {scrappedPlace &&
        scrappedPlace.map((data, index) => (
          <div key={index}>
            <PlaceInfoMain
              variant="record"
              size="small"
              {...data}
              className="w-[16.3rem]"
            />
          </div>
        ))}
    </div>
  );
}
