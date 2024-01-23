"use client";
import { usePathname, useSearchParams } from "next/navigation";
import RecordComplete from "@feature/record/components/RecordComplete/RecordComplete";
import SelectKeyword from "@feature/record/components/Keyword/SelectKeyword";
import SelectEvaluation from "@feature/record/components/Evaluation/SelectEvaluation";
import UseKeyword from "@feature/record/components/Keyword/useKeyword";

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
          handleIndicator={handlers.changeIndicatorIndex}
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
              handleIndicator={handlers.changeIndicatorIndex}
              cafeKeywordData={cafeKeywordData}
              handleKeyword={handlers.changeKeyword}
            />
          }
        </div>
      )}
      {/* <div>
        {type === "evaluate" && (
          <SelectEvaluation type={type} category={category} name={name} />
        )}
      </div>
      <div>
        {type === "photo" && (
          <SelectPhoto type={type} category={category} name={name} />
        )}
      </div>
      <div>{type === "complete" && <RecordComplete />}</div> */}
    </div>
  );
}
