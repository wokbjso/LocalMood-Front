import Filter from "@/common/components/ui/buttons/Filter/Filter";
import Label from "@/common/components/ui/text/Label";
import NumberCountWithSlash from "@/common/components/ui/text/NumberCountWithSlash";
import {
  CAFE_EVALUATIONS,
  PLACE_EVALUATIONS,
  RESTAURANT_EVALUATIONS,
} from "@/feature/record/constants/evaluate-keywords";

//Organism
export default function EvaluationKeywordContent({
  placeType,
  cafeKeywordData,
  restaurantKeywordData,
  handleKeyword,
}: {
  placeType: string;
  cafeKeywordData: { [key: string]: string | Array<string> };
  restaurantKeywordData: { [key: string]: string | Array<string> };
  handleKeyword: (category: string, keyword: string) => void;
}) {
  const handleFilterClick = (category: string, keyword: string) => {
    handleKeyword(category, keyword);
  };

  return (
    <div className="flex flex-col items-start pt-[148px] pb-[180px] px-[20px] overflow-y-scroll">
      {placeType === "CAFE" &&
        Object.keys(PLACE_EVALUATIONS).map((category, i) => (
          <section
            key={category}
            className={
              i !== Object.keys(PLACE_EVALUATIONS).length - 1
                ? "mb-[40px]"
                : "mb-[12px]"
            }
          >
            <div className="flex items-start gap-[6px]">
              <Label
                label={PLACE_EVALUATIONS[category]}
                className="headline3-semibold"
              />
              <NumberCountWithSlash
                currentNum={cafeKeywordData[category].length}
                totalNum={3}
              />
            </div>
            <div className="flex flex-wrap gap-[0.6rem] mt-[12px]">
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
      {placeType === "RESTAURANT" &&
        Object.keys(PLACE_EVALUATIONS).map((category, i) => (
          <section
            key={category}
            className={
              i !== Object.keys(PLACE_EVALUATIONS).length - 1
                ? "mb-[4rem]"
                : "mb-[1.2rem]"
            }
          >
            <div className="flex items-start gap-[6px]">
              <Label
                label={PLACE_EVALUATIONS[category]}
                className="headline3-semibold"
              />
              <NumberCountWithSlash
                currentNum={restaurantKeywordData[category].length}
                totalNum={3}
              />
            </div>
            <div className="flex flex-wrap gap-[0.6rem] mt-[12px]">
              {RESTAURANT_EVALUATIONS[PLACE_EVALUATIONS[category]].map(
                (keyword) => {
                  return (
                    <Filter
                      key={keyword}
                      label={keyword}
                      selected={restaurantKeywordData[category].includes(
                        keyword
                      )}
                      onClick={() => handleFilterClick(category, keyword)}
                    />
                  );
                }
              )}
            </div>
          </section>
        ))}
    </div>
  );
}
