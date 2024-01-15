import ShowMoreButton from "@feature/record/components/PlaceRecordButtons/ShowMoreButton";
import PlaceSearchBar from "@feature/record/components/PlaceSearch/PlaceSearchBar";

export default function Record() {
  return (
    <div>
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
        <PlaceSearchBar size="long" />
      </div>
      <div className="w-full flex justify-between items-center pl-[2rem] pr-[1.5rem] pt-[4.4rem] text-black headline2-semibold">
        스크랩한 공간
        <ShowMoreButton />
      </div>
    </div>
  );
}
