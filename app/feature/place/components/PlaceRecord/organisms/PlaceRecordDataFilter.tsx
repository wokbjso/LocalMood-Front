import Filter from "@/common/components/ui/buttons/Filter/Filter";
import {
  PLACE_CAFE_PURPOSE,
  PLACE_RESTAURANT_PURPOSE,
} from "@/feature/place/constants/place-tag-category";
import { PlaceRecordDataProps } from "./PlaceRecordData";
import { twMerge } from "tailwind-merge";

export default function PlaceRecordDataFilter({
  type,
  reviews,
  reviewPurposeIndex,
  handleReviewFilterClick,
  className,
}: PlaceRecordDataProps & {
  reviewPurposeIndex: number;
  handleReviewFilterClick: (index: number) => void;
  className?: string;
}) {
  return (
    <div
      className={twMerge("flex overflow-x-scroll whitespace-nowrap", className)}
    >
      {type === "CAFE"
        ? PLACE_CAFE_PURPOSE.map((purpose, i) => (
            <Filter
              key={purpose}
              label={
                reviews[PLACE_CAFE_PURPOSE[i]]
                  ? purpose + " " + reviews[PLACE_CAFE_PURPOSE[i]]?.length
                  : purpose + " " + 0
              }
              selected={reviewPurposeIndex === i}
              className="mr-[0.8rem]"
              onClick={() => handleReviewFilterClick(i)}
            />
          ))
        : PLACE_RESTAURANT_PURPOSE.map((purpose, i) => (
            <Filter
              key={purpose}
              label={
                reviews[PLACE_RESTAURANT_PURPOSE[i]]
                  ? purpose + " " + reviews[PLACE_RESTAURANT_PURPOSE[i]]?.length
                  : purpose + " " + 0
              }
              selected={reviewPurposeIndex === i}
              className="mr-[0.8rem]"
              onClick={() => handleReviewFilterClick(i)}
            />
          ))}
    </div>
  );
}
