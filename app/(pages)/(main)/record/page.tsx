import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";
import PlaceInfoMain from "@feature/place/components/PlaceInfoMain/PlaceInfoMain";
import GetPlaceScrapped from "@feature/place/queries/getPlaceScrapped";
import PlaceSearchBar from "@feature/record/components/PlaceSearch/PlaceSearchBar";

export default async function Record() {
  const scrappedPlace = await GetPlaceScrapped();
  return (
    <div className="h-[100vh]">
      <div className="w-full h-[10.6rem] flex px-[2rem] pt-[3.8rem] pb-[1.2rem] justify-between items-center">
        <div className="max-w-[33.5rem] h-[5.3rem] headline1-semibold text-black grow shrink-0 basis-0">
          <div>
            기록을 남길 공간을 <br />
            선택해주세요
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start pl-[2rem] pr-[1.9rem] pt-[6rem] gap-[1.6rem] text-black headline2-semibold">
        공간 검색하기
        <PlaceSearchBar />
      </div>
      <div className="w-full flex justify-between items-center pl-[2rem] pr-[1.5rem] pt-[4.4rem] text-black headline2-semibold">
        <span>스크랩한 공간</span>
        <LinkLayout routeUrl="/record/scrapped/more">
          <span className="text-text-gray-6 body2-semibold">더보기</span>
        </LinkLayout>
      </div>
      <div className="flex overflow-x-scroll px-[2rem] pt-[1.6rem] gap-[0.8rem] overflow-y-hidden h-[35%]">
        {scrappedPlace.length === 0 && (
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
                {...data}
                className="w-[16.3rem]"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
