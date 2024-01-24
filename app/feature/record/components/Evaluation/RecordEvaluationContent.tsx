import Button from "@common/components/ui/buttons/Button/Button";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import {
  CAFE_EVALUATIONS,
  PLACE_EVALUATIONS,
  RESTAURANT_EVALUATIONS,
} from "@feature/record/constants/evaluate-keywords";

export default function RecordEvaluationContent({
  placeType,
  cafeKeywordData,
  handleIndicatorIndex,
  handleKeyword,
}: {
  placeType: string;
  cafeKeywordData: { [key: string]: string | Array<string> };
  handleIndicatorIndex: (index: number) => void;
  handleKeyword: (category: string, keyword: string) => void;
}) {
  const handleFilterClick = (category: string, keyword: string) => {
    handleKeyword(category, keyword);
  };
  const handleNextClick = () => {
    handleIndicatorIndex(2);
  };

  return (
    <div className="flex flex-col items-start pt-[14.8rem] pb-[18rem] px-[2rem] overflow-y-scroll">
      {placeType === "카페" &&
        Object.keys(PLACE_EVALUATIONS).map((category, i) => (
          <section
            key={category}
            className={
              i !== Object.keys(PLACE_EVALUATIONS).length - 1
                ? "mb-[4rem]"
                : "mb-[1.2rem]"
            }
          >
            <div className="flex items-start gap-[0.6rem]">
              <div className="text-black headline3-semibold mb-[1.2rem]">
                {PLACE_EVALUATIONS[category]}
              </div>
              <div className="headline3-semibold text-text-gray-6">
                {cafeKeywordData[category].length}/3
              </div>
            </div>
            <div className="flex flex-wrap gap-[0.6rem]">
              {CAFE_EVALUATIONS[PLACE_EVALUATIONS[category]].map((keyword) => {
                return (
                  <Filter
                    key={keyword}
                    label={keyword}
                    selected={cafeKeywordData[category].includes(keyword)}
                    onClick={() => handleFilterClick(category, keyword)}
                  />
                );
              })}
            </div>
          </section>
        ))}
      <div className="pt-[1.4rem]">
        {(placeType === "양식" || placeType === "한식") &&
          Object.keys(PLACE_EVALUATIONS).map((category, i) => (
            <section
              key={category}
              className={
                i !== Object.keys(PLACE_EVALUATIONS).length - 1
                  ? "mb-[4rem]"
                  : "mb-[2.7rem]"
              }
            >
              <div className="flex items-start gap-[0.6rem]">
                <div className="text-black headline3-semibold mb-[1.2rem]">
                  {PLACE_EVALUATIONS[category]}
                </div>
                <div className="headline3-semibold text-text-gray-6">0/3</div>
              </div>
              <div className="flex flex-wrap gap-[0.6rem]">
                {Object.keys(RESTAURANT_EVALUATIONS).indexOf(category) === i &&
                  RESTAURANT_EVALUATIONS[PLACE_EVALUATIONS[category]].map(
                    (keyword) => {
                      return (
                        <Filter
                          key={keyword}
                          label={keyword}
                          onClick={() => handleFilterClick(category, keyword)}
                        />
                      );
                    }
                  )}
              </div>
            </section>
          ))}
      </div>
      <div className="fixed h-[15.5rem] bottom-0 bg-white">
        <Button onClick={handleNextClick}>
          {Object.keys(PLACE_EVALUATIONS).filter(
            (category) => cafeKeywordData[category].length === 0
          ).length === 2
            ? "건너뛰기"
            : "다음"}
        </Button>
      </div>
    </div>
  );
}
