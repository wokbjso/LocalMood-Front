import { PLACE_CATEGORY } from "@feature/place/constants/place-tag-category";
import PlacePurposeBox from "./PlacePurposeBox";

interface PlaceKeywordSummaryPurposeProps {
  purpose: string[];
}

//Molecule
export default function PlaceKeywordSummaryPurpose({
  purpose,
}: PlaceKeywordSummaryPurposeProps) {
  return (
    <>
      <span className="body2-medium text-text-gray-6">
        {PLACE_CATEGORY["purpose"]}
      </span>
      <div className="flex justify-between mt-[0.8rem] mb-[1.6rem]">
        {purpose.map((text, i) => (
          <PlacePurposeBox key={text + i} purpose={text} />
        ))}
      </div>
    </>
  );
}
