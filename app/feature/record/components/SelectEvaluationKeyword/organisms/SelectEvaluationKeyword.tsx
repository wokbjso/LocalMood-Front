import RecordPageBookTopBar from "../../RecordPageBook/organisms/RecordPageBookTopBar";
import EvaluationKeywordContent from "./EvaluationKeywordContent";

interface SelectEvaluation {
  placeType: string;
  indicatorIndex: number;
  handleIndicatorIndex: (index: number) => void;
  cafeKeywordData: { [key: string]: string | Array<string> };
  restaurantKeywordData: { [key: string]: string | Array<string> };
  handleKeyword: (category: string, keyword: string) => void;
}

//Organism
export default function SelectEvaluationKeyword({
  placeType,
  indicatorIndex,
  handleIndicatorIndex,
  cafeKeywordData,
  restaurantKeywordData,
  handleKeyword,
}: SelectEvaluation) {
  return (
    <div className="absolute">
      <RecordPageBookTopBar
        showIndicator={true}
        indicatorIndex={indicatorIndex}
        handleIndicatorIndex={handleIndicatorIndex}
        text="특별히 좋았던 점과 아쉬운 점이 있었나요?"
      />
      <EvaluationKeywordContent
        placeType={placeType}
        cafeKeywordData={cafeKeywordData}
        restaurantKeywordData={restaurantKeywordData}
        handleKeyword={handleKeyword}
      />
    </div>
  );
}
