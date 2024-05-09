import NoResult from "@common/assets/images/search_no_result.svg";

//Molecule
export default function SearchNoResult() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <NoResult />
      <p className="flex justify-center body1 text-text-gray-8 mt-[2.3rem]">
        검색 결과가 없습니다.
      </p>
    </div>
  );
}
