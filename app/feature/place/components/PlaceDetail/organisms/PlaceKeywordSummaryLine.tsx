import Chip from "@/common/components/ui/buttons/Chip/Chip";
import HashTag from "@/common/components/ui/text/HashTag";
import { PLACE_CATEGORY } from "@/feature/place/constants/place-tag-category";
import { twMerge } from "tailwind-merge";

interface PlaceKeywordSummaryLineProps {
  category: string;
  record: string | string[];
  className?: string;
}

//Molecule
export default function PlaceKeywordSummaryLine({
  category,
  record,
  className,
}: PlaceKeywordSummaryLineProps) {
  return (
    <div className={className}>
      <span className="body2-medium text-text-gray-6 mr-[1.8rem]">
        {category}
      </span>
      {typeof record === "string" ? (
        <Chip className="bg-white">
          <HashTag
            mainText={" " + record}
            tagClassName="body2-medium"
            mainTextClassName="body2-medium"
          />
        </Chip>
      ) : (
        record.slice(0, 2).map((li, i) =>
          category === PLACE_CATEGORY["interior"] ? (
            <Chip
              className={twMerge("bg-white", i === 0 && "mr-[8px]")}
              key={li + i}
            >
              <HashTag
                mainText={" " + li}
                tagClassName="body2-medium"
                mainTextClassName="body2-medium"
              />
            </Chip>
          ) : null
        )
      )}
    </div>
  );
}
