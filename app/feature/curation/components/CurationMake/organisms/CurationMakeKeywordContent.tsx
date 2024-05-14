import { CURATION_MAKE_CATEGORY } from "@/feature/curation/constants/curation-make";
import { CurationMakeKeywordProps } from "./CurationMakeKeyword";
import CurationMakeKeywordContentSection from "./CurationMakeKeywordContentSection";

export default function CurationMakeKeywordContent({
  isOpen,
  curationMakeData,
  handleKeyword,
}: Pick<CurationMakeKeywordProps, "curationMakeData" | "handleKeyword"> & {
  isOpen: boolean;
}) {
  return (
    isOpen && (
      <div className="h-full pt-[3.2rem] pb-[11.3rem] flex flex-col items-start overflow-auto">
        {Object.keys(CURATION_MAKE_CATEGORY).map((category) => (
          <CurationMakeKeywordContentSection
            key={category}
            category={category}
            curationMakeData={curationMakeData}
            handleKeyword={handleKeyword}
          />
        ))}
      </div>
    )
  );
}
