import PlaceInfoCard from "@/feature/place/components/PlaceInfo/organisms/PlaceInfoCard";
import GetPlaceScrapped from "@/feature/place/queries/getPlaceScrapped";
import PlaceRecordTopBar from "@/feature/record/components/RecordPageBook/organisms/RecordPageBookTopBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "스크랩한 공간들",
};

export default async function RecordScrappedMorePage() {
  const scrappedPlace = await GetPlaceScrapped();
  return (
    <div className="w-[100%] h-[100%] overflow-auto">
      <PlaceRecordTopBar
        showIndicator={false}
        indicatorIndex={0}
        text="스크랩한 공간"
        className="z-20"
      />
      <div className="flex flex-col items-start w-full pt-[9.6rem] px-[2rem] gap-[0.8rem] pb-[15rem]">
        {scrappedPlace && scrappedPlace.length === 0 && (
          <p className="flex w-full justify-center items-center h-[50vh] body1-medium text-text-gray-8">
            아직 스크랩한 공간이 없습니다.
          </p>
        )}
        {scrappedPlace && scrappedPlace.length > 0
          ? scrappedPlace.map((props, index) => (
              <div key={index} className="w-full">
                <PlaceInfoCard
                  direction="horizontal"
                  variant="record"
                  {...props}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}