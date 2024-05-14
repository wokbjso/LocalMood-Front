import HashTag from "@/common/components/ui/text/HashTag";
import NumberCountWithSlash from "@/common/components/ui/text/NumberCountWithSlash";
import { CurationMakeKeywordProps } from "./CurationMakeKeyword";
import ArrowUpIcon from "@/common/assets/icons/arrow/ArrowUpIcon";
import ArrowDownIcon from "@/common/assets/icons/arrow/ArrowDownIcon";

//Organism
export default function CurationMakeKeywordBar({
  curationMakeData,
  isExpanded,
  handleArrowClick,
}: Pick<CurationMakeKeywordProps, "curationMakeData"> & {
  isExpanded: boolean;
  handleArrowClick: () => void;
}) {
  return (
    <div className="w-full pb-[1.2rem] border-b border-text-gray-3">
      <div className="flex items-center justify-between flex-start">
        <div className="flex gap-[0.6rem]">
          <HashTag
            mainText=" 대표키워드 설정"
            mainTextClassName="headline3-semibold"
            tagClassName="text-primary-normal headline3-semibold"
          />
          <NumberCountWithSlash
            currentNum={
              Object.keys(curationMakeData.keyword).filter(
                (k) => curationMakeData.keyword[k].length > 0
              ).length
            }
            totalNum={2}
          />
        </div>
        <div
          className="flex w-[3rem] h-[1.6rem] items-center justify-end pr-[1px]"
          onClick={handleArrowClick}
        >
          {isExpanded ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
      </div>
    </div>
  );
}
