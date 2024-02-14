import GetPlaceScrapped from "@feature/place/queries/getPlaceScrapped";
import dynamic from "next/dynamic";
const PlaceInfoMain = dynamic(() => import("../PlaceInfoMain/PlaceInfoMain"));

export default async function PlaceScrapList() {
  const scrappedPlace = await GetPlaceScrapped();

  return (
    <div className="flex overflow-x-scroll px-[2rem] gap-[0.8rem] overflow-y-hidden h-[40%]">
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
