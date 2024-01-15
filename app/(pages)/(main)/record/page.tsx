import SearchBar from "@feature/search/components/SearchBar/SearchBar";

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
      <div>
        공간 검색하기
        <SearchBar variant="record" placeholder="공간검색" />
      </div>
    </div>
  );
}
