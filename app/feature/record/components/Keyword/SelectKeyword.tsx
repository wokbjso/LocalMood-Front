import RecordKeywordContent from "@feature/record/components/Keyword/RecordKeywordContent";
import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";

interface SelectKeyword {
  placeType: string;
  name: string;
  cafeKeywordData: {
    [key: string]: string | Array<string>;
  };
  restaurantKeywordData: {
    [key: string]: string | Array<string>;
  };
  handleKeyword: (category: string, keyword: string) => void;
  indicatorIndex: number;
  handleIndicatorIndex: (index: number) => void;
}

export default function SelectKeyword({
  placeType,
  name,
  cafeKeywordData,
  restaurantKeywordData,
  handleKeyword,
  indicatorIndex,
  handleIndicatorIndex,
}: SelectKeyword) {
  return (
    <div>
      <PlaceRecordTopBar
        showIndicator={true}
        indicatorIndex={indicatorIndex}
        handleIndicatorIndex={handleIndicatorIndex}
        text={`${name}를 나타내는 키워드를 골라주세요`}
      />
      <RecordKeywordContent
        placeType={placeType}
        cafeKeywordData={cafeKeywordData}
        restaurantKeywordData={restaurantKeywordData}
        handleKeyword={handleKeyword}
        handleIndicatorIndex={handleIndicatorIndex}
      />
    </div>
  );
}
