import {
  CAFE_CATEGORY,
  CAFE_KEYWORDS,
  RESTARANT_KEYWORDS,
  RESTAURANT_CATEGORY,
} from "@feature/search/constants/search-keywords";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import Button from "@common/components/ui/buttons/Button/Button";

export default function RecordKeywordContent({
  placeType,
  cafeKeywordData,
  restaurantKeywordData,
  handleKeyword,
  handleIndicatorIndex,
}: {
  placeType: string;
  cafeKeywordData: { [key: string]: string | Array<string> };
  restaurantKeywordData: { [key: string]: string | Array<string> };
  handleKeyword: (category: string, keyword: string) => void;
  handleIndicatorIndex: (index: number) => void;
}) {
  const handleFilterClick = (category: string, keyword: string) => {
    handleKeyword(category, keyword);
  };
  const jump = () => {
    if (placeType === "CAFE") {
      return (
        Object.keys(cafeKeywordData).filter(
          (category) =>
            typeof cafeKeywordData[category] === "string" &&
            cafeKeywordData[category] !== ""
        ).length === 0
      );
    } else if (placeType === "RESTAURANT") {
      return (
        Object.keys(restaurantKeywordData).filter(
          (category) =>
            typeof restaurantKeywordData[category] === "string" &&
            restaurantKeywordData[category] !== ""
        ).length === 0
      );
    }
  };

  const handleNextClick = () => {
    handleIndicatorIndex(1);
  };

  return (
    <div className="flex flex-col items-start h-full pt-[14.8rem] pb-[18rem] pl-[2.05rem] pr-[1.95rem] overflow-y-scroll">
      {placeType === "CAFE" &&
        Object.keys(CAFE_CATEGORY)
          .slice(0, 4)
          .map((category, i) => (
            <section
              key={category}
              className={
                i !== Object.keys(CAFE_CATEGORY).length - 1
                  ? "mb-[4rem]"
                  : "mb-[2.7rem]"
              }
            >
              <div className="text-black headline3 mb-[1.2rem]">
                {CAFE_CATEGORY[category]}
              </div>
              <div className="flex flex-wrap gap-[0.6rem]">
                {CAFE_KEYWORDS[CAFE_CATEGORY[category]].map((keyword) => (
                  <Filter
                    key={keyword}
                    label={keyword}
                    selected={cafeKeywordData[category] === keyword}
                    onClick={() => handleFilterClick(category, keyword)}
                  />
                ))}
              </div>
            </section>
          ))}
      {placeType === "RESTAURANT" &&
        Object.keys(RESTAURANT_CATEGORY)
          .slice(0, 3)
          .map((category, i) => (
            <section
              key={category}
              className={
                i !== Object.keys(RESTAURANT_CATEGORY).length - 1
                  ? "mb-[4rem]"
                  : "mb-[2.7rem]"
              }
            >
              <div className="text-black headline3 mb-[1.2rem]">
                {RESTAURANT_CATEGORY[category]}
              </div>
              <div className="flex flex-wrap gap-[0.6rem]">
                {RESTARANT_KEYWORDS[RESTAURANT_CATEGORY[category]].map(
                  (keyword) => (
                    <Filter
                      key={keyword}
                      label={keyword}
                      selected={restaurantKeywordData[category] === keyword}
                      onClick={() => handleFilterClick(category, keyword)}
                    />
                  )
                )}
              </div>
            </section>
          ))}
      <div className="flex justify-center w-full fixed h-[15.5rem] left-0 bottom-0 bg-white">
        <Button onClick={handleNextClick}>
          {jump() ? "건너뛰기" : "다음"}
        </Button>
      </div>
    </div>
  );
}
