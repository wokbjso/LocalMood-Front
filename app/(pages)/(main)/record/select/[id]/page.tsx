"use client";
import { useSearchParams } from "next/navigation";
import RecordComplete from "@feature/record/components/RecordComplete/RecordComplete";
import SelectKeyword from "@feature/record/components/Keyword/SelectKeyword";
import SelectEvaluation from "@feature/record/components/Evaluation/SelectEvaluation";
import UseKeyword from "@feature/record/components/Keyword/useKeyword";
import SelectPhoto from "@feature/record/components/PhotoUpload/SelectPhoto";

export default function RecordSelect({
  params: id,
}: {
  params: { id: number };
}) {
  const searchParams = useSearchParams();
  const placeType = searchParams.get("type") || "";
  const name = searchParams.get("name") || "";
  const { indicatorIndex, cafeKeywordData, restaurantKeywordData, handlers } =
    UseKeyword(placeType);
  console.log(restaurantKeywordData);
  return (
    <div>
      {indicatorIndex === 0 && (
        <SelectKeyword
          placeType={placeType}
          name={name}
          indicatorIndex={indicatorIndex}
          handleIndicatorIndex={handlers.changeIndicatorIndex}
          cafeKeywordData={cafeKeywordData}
          restaurantKeywordData={restaurantKeywordData}
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
              restaurantKeywordData={restaurantKeywordData}
              handleKeyword={handlers.changeKeyword}
            />
          }
        </div>
      )}
      {indicatorIndex === 2 && (
        <SelectPhoto
          placeType={placeType}
          spaceId={id.id}
          indicatorIndex={indicatorIndex}
          handleIndicatorIndex={handlers.changeIndicatorIndex}
          cafeKeywordData={cafeKeywordData}
          restaurantKeywordData={restaurantKeywordData}
          handleImage={handlers.changeImage}
        />
      )}
      {indicatorIndex === 3 && (
        <RecordComplete
          placeType={placeType}
          spaceId={id.id}
          handleIndicatorIndex={handlers.changeIndicatorIndex}
          restaurantKeywordData={restaurantKeywordData}
          cafeKeywordData={cafeKeywordData}
        />
      )}
    </div>
  );
}
