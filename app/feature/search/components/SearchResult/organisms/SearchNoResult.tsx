import NoResult from "@/common/assets/images/search_no_result.svg";
import Text from "@/common/components/ui/text/Text";

//Molecule
export default function SearchNoResult() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <NoResult />
      <Text className="flex justify-center body1 mt-[23px]">
        검색 결과가 없습니다.
      </Text>
    </div>
  );
}
