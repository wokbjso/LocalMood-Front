import { twMerge } from "tailwind-merge";
import BookIcon from "@/common/assets/icons/book/BookIcon";
import BusinessIcon from "@/common/assets/icons/business/BusinessIcon";
import ChatIcon from "@/common/assets/icons/chat/ChatIcon";
import Heart from "@/common/assets/icons/heart/HeartIcon";
import {
  PLACE_CAFE_PURPOSE,
  PLACE_RESTAURANT_PURPOSE,
} from "@/feature/place/constants/place-tag-category";
import GraphBar from "./GraphBar";

export interface RecordPurposeGraphBarProps {
  type: string;
  evaluation: string;
  percentage?: number;
  className?: string;
}

export default function RecordPurposeGraphBar({
  type,
  evaluation,
  percentage,
  className,
}: RecordPurposeGraphBarProps) {
  const purposeIcon = () => {
    if (
      evaluation ===
      (type === "CAFE" ? PLACE_CAFE_PURPOSE[0] : PLACE_RESTAURANT_PURPOSE[0])
    )
      return <Heart color="#F670C7" />;
    else if (
      evaluation ===
      (type === "CAFE" ? PLACE_CAFE_PURPOSE[1] : PLACE_RESTAURANT_PURPOSE[1])
    )
      return <ChatIcon color="#FDB022" />;
    else if (
      evaluation ===
      (type === "CAFE" ? PLACE_CAFE_PURPOSE[2] : PLACE_RESTAURANT_PURPOSE[2])
    )
      return <BookIcon />;
    else if (
      type === "CAFE" ? PLACE_CAFE_PURPOSE[3] : PLACE_RESTAURANT_PURPOSE[3]
    )
      return <BusinessIcon color="#0BA5EC" color2="#0BA5EC80" />;
  };

  return (
    <div
      className={twMerge(
        "w-full h-[4rem] flex flex-col justify-between",
        className
      )}
    >
      <div className="flex items-center">
        {purposeIcon()}
        <span className="body1-medium text-text-gray-9 ml-[0.6rem] mr-[0.4rem]">
          {evaluation}
        </span>
        <span className="body1-medium text-text-gray-6">
          {percentage + "%"}
        </span>
      </div>
      <GraphBar percentage={percentage} />
    </div>
  );
}
