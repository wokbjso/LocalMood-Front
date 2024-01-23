import RecordKeywordContent from "@feature/record/components/Keyword/RecordKeywordContent";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";

interface SelectKeyword {
  placeType: string;
  name: string;
  cafeKeywordData: {
    [key: string]: string;
  };
  handleKeyword: (category: string, keyword: string) => void;
}

export default function SelectKeyword({
  placeType,
  name,
  cafeKeywordData,
  handleKeyword,
}: SelectKeyword) {
  return (
    <div>
      <PlaceRecordTopBar
        showIndicator={true}
        indicatorIndex={0}
        text={`${name}를 나타내는 키워드를 골라주세요`}
      />
      <RecordKeywordContent
        placeType={placeType}
        cafeKeywordData={cafeKeywordData}
        handleKeyword={handleKeyword}
      />
    </div>
  );
}
