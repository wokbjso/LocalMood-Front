import Filter from "@/common/components/ui/buttons/Filter/Filter";
import {
  CURATION_MAKE_CATEGORY,
  CURATION_MAKE_KEYWORD,
} from "@/feature/curation/constants/curation-make";
import { CurationMakeKeywordProps } from "./CurationMakeKeyword";

export default function CurationMakeKeywordContentSection({
  category,
  curationMakeData,
  handleKeyword,
}: Pick<CurationMakeKeywordProps, "curationMakeData" | "handleKeyword"> & {
  category: string;
}) {
  const handleKeywordFilterClick = (category: string, keyword: string) => {
    handleKeyword && handleKeyword(category, keyword);
  };

  return (
    <div key={category} className="mb-[4rem]">
      <div className="headline3-semibold ">
        {CURATION_MAKE_CATEGORY[category]}
      </div>
      <div className="pt-[1.2rem] inline-flex items-start content-start flex-wrap gap-[0.8rem]">
        {CURATION_MAKE_KEYWORD[CURATION_MAKE_CATEGORY[category]].map(
          (keyword) => (
            <Filter
              key={keyword}
              label={keyword}
              selected={curationMakeData.keyword[category] === keyword}
              onClick={() => handleKeywordFilterClick(category, keyword)}
            />
          )
        )}
      </div>
    </div>
  );
}
