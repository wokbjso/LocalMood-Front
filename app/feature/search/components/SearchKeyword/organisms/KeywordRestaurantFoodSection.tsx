import Filter from "@/common/components/ui/buttons/Filter/Filter";
import Label from "@/common/components/ui/text/Label";
import {
  KOREAN_OPTION,
  RESTARANT_KEYWORDS,
  RESTAURANT_CATEGORY,
} from "@/feature/search/constants/search-keywords";

interface KeywordRestaurantFoodSection {
  openKoreanOption: boolean;
  restaurantKeyword: { [key: string]: string };
  koreanOptionIndex: number;
  handleRestaurantSubType: (keyword: string) => void;
  handleKoreanOptionIndex: (index: number) => void;
}

export default function KeywordFoodSection({
  openKoreanOption,
  restaurantKeyword,
  koreanOptionIndex,
  handleRestaurantSubType,
  handleKoreanOptionIndex,
}: KeywordRestaurantFoodSection) {
  return (
    <section className="mb-[40px]">
      <Label label={RESTAURANT_CATEGORY["subType"]} className="headline3" />
      <div className="flex flex-wrap gap-[0.6rem] mt-[12px]">
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
            onClick={() => handleRestaurantSubType(keyword)}
          />
        ))}
        {openKoreanOption &&
          KOREAN_OPTION.map((option, i) => (
            <Filter
              key={option}
              label={option}
              selected={koreanOptionIndex === i}
              onClick={() => handleKoreanOptionIndex(i)}
            />
          ))}
      </div>
    </section>
  );
}
