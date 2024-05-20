import Filter from "@/common/components/ui/buttons/Filter/Filter";
import Label from "@/common/components/ui/text/Label";
import {
  CAFE_CATEGORY,
  CAFE_KEYWORDS,
  RESTARANT_KEYWORDS,
  RESTAURANT_CATEGORY,
} from "@/feature/search/constants/search-keywords";

interface KeywordSectionProps {
  type: "RESTAURANT" | "CAFE";
  category: string;
  keywordData: { [key: string]: string };
  handleKeywordData: (category: string, keyword: string) => void;
  className?: string;
}

//Organism
export default function KeywordSection({
  type,
  category,
  keywordData,
  handleKeywordData,
  className,
}: KeywordSectionProps) {
  const TYPE_CATEGORY =
    type === "RESTAURANT" ? RESTAURANT_CATEGORY : CAFE_CATEGORY;
  const TYPE_KEYWORD =
    type === "RESTAURANT" ? RESTARANT_KEYWORDS : CAFE_KEYWORDS;
  return (
    <section className={className}>
      <Label label={TYPE_CATEGORY[category]} className="headline3 mb-[12px]" />
      <div className="flex flex-wrap gap-[0.6rem]">
        {TYPE_KEYWORD[TYPE_CATEGORY[category]].map((keyword) => (
          <Filter
            key={keyword}
            label={keyword}
            selected={keywordData[category] === keyword}
            onClick={() => handleKeywordData(category, keyword)}
          />
        ))}
      </div>
    </section>
  );
}
