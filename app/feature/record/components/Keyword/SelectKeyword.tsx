import RecordKeywordContent from "@feature/record/components/Keyword/RecordKeywordContent";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";

interface SelectKeyword {
  placeType: string;
  name: string;
  cafeKeywordData: {
    [key: string]: string | Array<string>;
  };
  handleKeyword: (category: string, keyword: string) => void;
  indicatorIndex: number;
  handleIndicator: (index: number) => void;
}

export default function SelectKeyword({
  placeType,
  name,
  cafeKeywordData,
  handleKeyword,
  indicatorIndex,
  handleIndicator,
}: SelectKeyword) {
  return (
    <div>
      <PlaceRecordTopBar
        showIndicator={true}
        indicatorIndex={indicatorIndex}
        handleIndicator={handleIndicator}
        text={`${name}를 나타내는 키워드를 골라주세요`}
      />
      <RecordKeywordContent
        placeType={placeType}
        cafeKeywordData={cafeKeywordData}
        handleKeyword={handleKeyword}
        handleIndicator={handleIndicator}
      />
    </div>
  );
}
