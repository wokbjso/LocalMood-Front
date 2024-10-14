import {
  PLACE_CAFE_PURPOSE,
  PLACE_RESTAURANT_PURPOSE,
} from "@/feature/place/constants/place-tag-category";
import PlaceRecord from "./PlaceRecord";
import { PlaceRecordDataProps } from "./PlaceRecordData";

export default function PlaceRecordDataList({
  type,
  reviews,
  reviewPurposeIndex,
}: PlaceRecordDataProps & { reviewPurposeIndex: number }) {
  return (
    <section className="px-[2rem] pt-[2.4rem] min-h-[30dvh]">
      {type === "CAFE"
        ? reviews[PLACE_CAFE_PURPOSE[reviewPurposeIndex]] &&
          reviews[PLACE_CAFE_PURPOSE[reviewPurposeIndex]].map((review, i) => {
            return (
              <PlaceRecord
                key={review.name + i}
                purpose={PLACE_CAFE_PURPOSE[reviewPurposeIndex]}
                {...review}
              />
            );
          })
        : reviews[PLACE_RESTAURANT_PURPOSE[reviewPurposeIndex]] &&
          reviews[PLACE_RESTAURANT_PURPOSE[reviewPurposeIndex]].map(
            (review, i) => {
              return (
                <PlaceRecord
                  key={review.name + i}
                  purpose={PLACE_RESTAURANT_PURPOSE[reviewPurposeIndex]}
                  {...review}
                />
              );
            }
          )}
    </section>
  );
}
