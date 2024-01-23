"use client";
import { useSearchParams } from "next/navigation";
import RecordComplete from "@feature/record/components/RecordComplete/RecordComplete";
import SelectKeyword from "@feature/record/components/Keyword/SelectKeyword";
import SelectEvaluation from "@feature/record/components/Evaluation/SelectEvaluation";
import UseKeyword from "@feature/record/components/Keyword/useKeyword";
import SelectPhoto from "@feature/record/components/PhotoUpload/SelectPhoto";

export default function RecordSelect() {
  const searchParams = useSearchParams();
  const placeType = searchParams.get("category") || "";
  const name = searchParams.get("name") || "";
  const { indicatorIndex, cafeKeywordData, handlers } = UseKeyword(placeType);
  return (
    <div>
      {indicatorIndex === 0 && (
        <SelectKeyword
          placeType={placeType}
          name={name}
          indicatorIndex={indicatorIndex}
          handleIndicatorIndex={handlers.changeIndicatorIndex}
          cafeKeywordData={cafeKeywordData}
          handleKeyword={handlers.changeKeyword}
        />
      )}
      {indicatorIndex === 1 && (
        <div>
          {
            <SelectEvaluation
              placeType={placeType}
              indicatorIndex={indicatorIndex}
              handleIndicatorIndex={handlers.changeIndicatorIndex}
              cafeKeywordData={cafeKeywordData}
              handleKeyword={handlers.changeKeyword}
            />
          }
        </div>
      )}
      {indicatorIndex === 2 && (
        <SelectPhoto
          indicatorIndex={indicatorIndex}
          handleIndicatorIndex={handlers.changeIndicatorIndex}
          cafeKeywordData={cafeKeywordData}
          handleImage={handlers.changeImage}
        />
      )}
      {indicatorIndex === 3 && (
        <RecordComplete cafeKeywordData={cafeKeywordData} />
      )}
    </div>
  );
}
