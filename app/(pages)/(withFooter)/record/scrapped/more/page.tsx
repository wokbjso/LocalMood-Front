import Title from "@/common/components/ui/text/Title";
import PlaceInfoCard from "@/feature/place/components/PlaceInfo/organisms/PlaceInfoCard";
import GetPlaceScrapped from "@/feature/place/queries/getPlaceScrapped";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "스크랩한 공간들",
};

export default async function RecordScrappedMorePage() {
  const scrappedPlace = await GetPlaceScrapped();
  return (
    <div className="w-[100%] h-[100%] px-[2rem] pb-[1.2rem] pt-[4.8rem] fixed bg-white z-10">
      <Title className="headline1-semibold pb-[20px]">스크랩한 공간</Title>
      <div className="flex flex-col items-start w-full h-full gap-[0.8rem] pb-[15rem] overflow-auto">
        {scrappedPlace && scrappedPlace.length === 0 && (
          <p className="flex w-full justify-center items-center h-[50dvh] body1-medium text-text-gray-8">
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
