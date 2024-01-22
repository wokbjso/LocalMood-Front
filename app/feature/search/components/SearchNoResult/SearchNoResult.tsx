import NoResult from "@common/assets/images/search_no_result.svg";

export default function SearchNoResult() {
  return (
    <div className="flex flex-col justify-center items-center pt-[6.6rem]">
      <NoResult />
      <p className="flex justify-center body1 text-text-gray-8 mt-[2.3rem]">
        검색 결과가 없습니다.
      </p>
    </div>
  );
}
