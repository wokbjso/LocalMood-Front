import GetPlaceScrapped from "@/feature/place/queries/getPlaceScrapped";
import dynamic from "next/dynamic";
const PlaceInfoCard = dynamic(
  () => import("../PlaceInfo/organisms/PlaceInfoCard")
);

export default async function PlaceScrapList() {
  const scrappedPlace = await GetPlaceScrapped();
  return (
    <div className="w-full h-full flex px-[2rem] gap-[8px] overflow-auto pb-[5rem]">
      {scrappedPlace?.length === 0 && (
        <div className="flex items-center justify-center w-full h-[18rem]">
          <p className="body1-medium text-text-gray-8">
            아직 스크랩한 공간이 없습니다.
          </p>
        </div>
      )}
      {scrappedPlace &&
        scrappedPlace.length > 0 &&
        scrappedPlace.map((li, index) => (
          <div key={index}>
            <PlaceInfoCard
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
