import {
  CAFE_CATEGORY,
  CAFE_KEYWORDS,
} from "@feature/search/constants/search-keywords";
import Filter from "@common/components/ui/buttons/Filter/Filter";
import {
  RESTARANT_KEYWORDS,
  RESTAURANT_CATEGORY,
} from "@feature/record/constants/select-keywords";
import Button from "@common/components/ui/buttons/Button/Button";

export default function RecordKeywordContent({
  placeType,
  cafeKeywordData,
  handleKeyword,
  handleIndicator,
}: {
  placeType: string;
  cafeKeywordData: { [key: string]: string | Array<string> };
  handleKeyword: (category: string, keyword: string) => void;
  handleIndicator: (index: number) => void;
}) {
  const handleFilterClick = (category: string, keyword: string) => {
    handleKeyword(category, keyword);
  };

  const selectJump = () => {
    return (
      Object.keys(cafeKeywordData).filter(
        (category) => cafeKeywordData[category] !== ""
      ).length === 0
    );
  };

  const handleNextClick = () => {
    handleIndicator(1);
  };

  console.log(cafeKeywordData);
  return (
    <div className="flex flex-col items-start h-full pt-[14.8rem] pb-[18rem] pl-[2.05rem] pr-[1.95rem] overflow-y-scroll">
      {placeType === "카페" &&
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
      {(placeType === "양식" || placeType === "한식") &&
        RESTAURANT_CATEGORY.map((category, i) => (
          <section
            key={category}
            className={
              i !== RESTAURANT_CATEGORY.length - 1 ? "mb-[4rem]" : "mb-[2.7rem]"
            }
          >
            <div className="text-black headline3 mb-[1.2rem]">{category}</div>
            <div className="flex flex-wrap gap-[0.6rem]">
              {Object.keys(RESTARANT_KEYWORDS).indexOf(category) === i &&
                RESTARANT_KEYWORDS[category].map((keyword) => {
                  return (
                    <Filter
                      key={keyword}
                      label={keyword}
                      onClick={() => handleFilterClick(category, keyword)}
                    />
                  );
                })}
            </div>
          </section>
        ))}
      <div className="fixed bottom-[10.5rem]">
        <Button onClick={handleNextClick}>
          {selectJump() ? "건너뛰기" : "다음"}
        </Button>
      </div>
    </div>
  );
}
