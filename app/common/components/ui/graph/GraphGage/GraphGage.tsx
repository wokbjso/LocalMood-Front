import { GraphProps } from "../type";
import { twMerge } from "tailwind-merge";
import BookIcon from "@common/assets/icons/book/BookIcon";
import BusinessIcon from "@common/assets/icons/business/BusinessIcon";
import ChatIcon from "@common/assets/icons/chat/ChatIcon";
import Heart from "@common/assets/icons/heart/HeartIcon";
import {
  PLACE_CAFE_PURPOSE,
  PLACE_RESTAURANT_PURPOSE,
} from "@feature/place/constants/place-tag-category";

export default function GraphGage({
  type,
  evaluation,
  percentage,
  className,
}: Omit<GraphProps, "like"> & { type: string; className: string }) {
  return (
    <div
      className={twMerge(
        "w-full h-[4rem] flex flex-col justify-between",
        className
      )}
    >
      <div className="flex items-center">
        {evaluation ===
          (type === "CAFE"
            ? PLACE_CAFE_PURPOSE[0]
            : PLACE_RESTAURANT_PURPOSE[0]) && <Heart color="#F670C7" />}
        {evaluation ===
          (type === "CAFE"
            ? PLACE_CAFE_PURPOSE[1]
            : PLACE_RESTAURANT_PURPOSE[1]) && <ChatIcon color="#FDB022" />}
        {evaluation ===
          (type === "CAFE"
            ? PLACE_CAFE_PURPOSE[2]
            : PLACE_RESTAURANT_PURPOSE[2]) && <BookIcon />}
        {evaluation ===
          (type === "CAFE"
            ? PLACE_CAFE_PURPOSE[3]
            : PLACE_RESTAURANT_PURPOSE[3]) && (
          <BusinessIcon color="#0BA5EC" color2="#0BA5EC80" />
        )}
        <span className="body1-medium text-text-gray-9 ml-[0.6rem] mr-[0.4rem]">
          {evaluation}
        </span>
        <span className="body1-medium text-text-gray-6">
          {percentage + "%"}
        </span>
      </div>
      <div className="w-full h-[1.2rem] rounded-[10px] bg-background-gray-2">
        <div
          className="h-full bg-primary-normal rounded-[10px]"
          style={{
            width: percentage + "%",
          }}
        />
      </div>
    </div>
  );
}
