import PlaceRecordTopBar from "@feature/record/components/PlaceRecordTopBar/PlaceRecordTopBar";
import RecordEvaluationContent from "@feature/record/components/Evaluation/RecordEvaluationContent";

interface SelectEvaluation {
  placeType: string;
  indicatorIndex: number;
  handleIndicatorIndex: (index: number) => void;
  cafeKeywordData: { [key: string]: string | Array<string> };
  handleKeyword: (category: string, keyword: string) => void;
}

export default function SelectEvaluation({
  placeType,
  indicatorIndex,
  handleIndicatorIndex,
  cafeKeywordData,
  handleKeyword,
}: SelectEvaluation) {
  return (
    <div>
      <PlaceRecordTopBar
        showIndicator={true}
        indicatorIndex={indicatorIndex}
        handleIndicatorIndex={handleIndicatorIndex}
        text="특별히 좋았던 점과 아쉬운 점이 있었나요?"
      />
      <RecordEvaluationContent
        placeType={placeType}
        cafeKeywordData={cafeKeywordData}
        handleKeyword={handleKeyword}
      />
    </div>
  );
}
