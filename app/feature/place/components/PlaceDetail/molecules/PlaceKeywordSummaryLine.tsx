import Chip from "@common/components/ui/buttons/Chip/Chip";
import { PLACE_CATEGORY } from "@feature/place/constants/place-tag-category";
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
          <span className="body2-medium text-primary-normal"># </span>
          <span className="body2-medium">{record}</span>
        </Chip>
      ) : (
        record.slice(0, 2).map((li, i) =>
          category === PLACE_CATEGORY["interior"] ? (
            <Chip
              className={twMerge("bg-white", i === 0 && "mr-[8px]")}
              key={li + i}
            >
              <span className="body2-medium text-primary-normal"># </span>
              <span className="body2-medium">{li}</span>
            </Chip>
          ) : null
        )
      )}
    </div>
  );
}
