import PlaceRecordPurposeGraphBar from "../molecules/PlaceRecordPurposeGraphBar";
import {
  PLACE_CAFE_PURPOSE,
  PLACE_RESTAURANT_PURPOSE,
} from "@/feature/place/constants/place-tag-category";

interface PlaceRecordPurposeDistributionProps {
  type: string;
  reviewDataPercentage: {
    [key: string]: number;
  };
  className?: string;
}

export default function PlaceRecordPurposeDistribution({
  type,
  reviewDataPercentage,
  className,
}: PlaceRecordPurposeDistributionProps) {
  return (
    <div className={className}>
      {type === "CAFE"
        ? PLACE_CAFE_PURPOSE.map((li: string, i: number) => (
            <PlaceRecordPurposeGraphBar
              key={li + i}
              type={type}
              evaluation={li}
              percentage={reviewDataPercentage[li]}
              className={i === 0 ? "mt-[3.2rem] mb-[2.4rem]" : "mb-[2.4rem]"}
            />
          ))
        : PLACE_RESTAURANT_PURPOSE.map((li: string, i: number) => (
            <PlaceRecordPurposeGraphBar
              key={li + i}
              type={type}
              evaluation={li}
              percentage={reviewDataPercentage[li]}
              className={i === 0 ? "mt-[3.2rem] mb-[2.4rem]" : "mb-[2.4rem]"}
            />
          ))}
    </div>
  );
}
