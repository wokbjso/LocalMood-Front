import Filter from "@/common/components/ui/buttons/Filter/Filter";
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
    <div className="flex flex-col items-start pt-[14.8rem] pb-[18rem] px-[2rem] overflow-y-scroll">
      {placeType === "CAFE" &&
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
            <div className="flex items-start gap-[0.6rem]">
              <div className="text-black headline3-semibold mb-[1.2rem]">
                {PLACE_EVALUATIONS[category]}
              </div>
              <div className="headline3-semibold text-text-gray-6">
                {restaurantKeywordData[category].length}/3
              </div>
            </div>
            <div className="flex flex-wrap gap-[0.6rem]">
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
