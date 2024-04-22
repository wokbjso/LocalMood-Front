import Filter from "@common/components/ui/buttons/Filter/Filter";
import {
  KOREAN_OPTION,
  RESTARANT_KEYWORDS,
  RESTAURANT_CATEGORY,
} from "@feature/search/constants/search-keywords";

interface KeywordRestaurantFoodSection {
  openKoreanOption: boolean;
  restaurantKeyword: { [key: string]: string };
  koreanOptionIndex: number;
  handleKeywordClick: (category: string, keywoord: string) => void;
  handleKoreanOptionIndex: (index: number) => void;
}

export default function KeywordFoodSection({
  openKoreanOption,
  restaurantKeyword,
  koreanOptionIndex,
  handleKeywordClick,
  handleKoreanOptionIndex,
}: KeywordRestaurantFoodSection) {
  return (
    <section className="mb-[40px]">
      <div className="text-black headline3 mb-[1.2rem]">
        {RESTAURANT_CATEGORY["subType"]}
      </div>
      <div className="flex flex-wrap gap-[0.6rem]">
        {RESTARANT_KEYWORDS[RESTAURANT_CATEGORY["subType"]].map((keyword) => (
          <Filter
            key={keyword}
            label={keyword}
            selected={
              keyword === "한식"
                ? openKoreanOption
                : restaurantKeyword["subType"] === keyword
            }
            variant={keyword === "한식" ? "showOptions" : undefined}
            onClick={() => handleKeywordClick("subType", keyword)}
          />
        ))}
        {openKoreanOption &&
          KOREAN_OPTION.map((option, i) => (
            <Filter
              key={option}
              label={option}
              selected={
                (koreanOptionIndex == -1 && option === "한식 전체") ||
                koreanOptionIndex === i
              }
              onClick={() => handleKoreanOptionIndex(i)}
            />
          ))}
      </div>
    </section>
  );
}
