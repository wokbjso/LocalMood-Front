import {
  CAFE_CATEGORY,
  CAFE_KEYWORDS,
  RESTARANT_KEYWORDS,
  RESTAURANT_CATEGORY,
} from "@/feature/search/constants/search-keywords";
import Filter from "@/common/components/ui/buttons/Filter/Filter";
import Label from "@/common/components/ui/text/Label";

//Organism
export default function PlaceIndicatingKeywordContent({
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
    <div className="flex flex-col items-start h-full pt-[14.8rem] pb-[18rem] pl-[2.05rem] pr-[1.95rem]">
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
              <Label className="headline3">
                {CAFE_CATEGORY[category] + `${i === 0 ? " *" : ""}`}
              </Label>
              <div className="flex flex-wrap gap-[0.6rem] mt-[12px]">
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
        Object.keys(CAFE_CATEGORY)
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
              <Label className="headline3">
                {RESTAURANT_CATEGORY[category] + `${i === 0 ? " *" : ""}`}
              </Label>
              <div className="flex flex-wrap gap-[0.6rem] mt-[12px]">
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
    </div>
  );
}
