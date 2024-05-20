import { PlaceDetailResponse } from "@/feature/place/queries/dto/place-detail";
import PlaceRecordPurposeGraphBar from "../molecules/PlaceRecordPurposeGraphBar";
import {
  PLACE_CAFE_PURPOSE,
  PLACE_RESTAURANT_PURPOSE,
} from "@/feature/place/constants/place-tag-category";
import { PlaceRecordResponse } from "@/feature/place/queries/dto/place-record";

interface PlaceRecordPurposeDistributionProps {
  detailData: PlaceDetailResponse;
  reviewData: PlaceRecordResponse;
  className?: string;
}

export default function PlaceRecordPurposeDistribution({
  detailData,
  reviewData,
  className,
}: PlaceRecordPurposeDistributionProps) {
  return (
    <div className={className}>
      {detailData.info.type === "CAFE"
        ? PLACE_CAFE_PURPOSE.map((li: string, i: number) => (
            <PlaceRecordPurposeGraphBar
              key={li + i}
              type={detailData.info.type}
              evaluation={li}
              percentage={reviewData.purposeEval[li]}
              className={i === 0 ? "mt-[3.2rem] mb-[2.4rem]" : "mb-[2.4rem]"}
            />
          ))
        : PLACE_RESTAURANT_PURPOSE.map((li: string, i: number) => (
            <PlaceRecordPurposeGraphBar
              key={li + i}
              type={detailData.info.type}
              evaluation={li}
              percentage={reviewData.purposeEval[li]}
              className={i === 0 ? "mt-[3.2rem] mb-[2.4rem]" : "mb-[2.4rem]"}
            />
          ))}
    </div>
  );
}
