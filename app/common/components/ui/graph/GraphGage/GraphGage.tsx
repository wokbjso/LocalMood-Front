import { ReactNode } from "react";
import { GraphProps } from "../type";
import { twMerge } from "tailwind-merge";
import BookIcon from "@common/assets/icons/book/BookIcon";
import BusinessIcon from "@common/assets/icons/business/BusinessIcon";
import ChatIcon from "@common/assets/icons/chat/ChatIcon";
import Heart from "@common/assets/icons/heart/HeartIcon";
import { PLACE_PURPOSE } from "@feature/place/constants/place-tag-category";

export default function GraphGage({
  evaluation,
  percentage,
  className,
}: Omit<GraphProps, "like">) {
  return (
    <div
      className={twMerge(
        "w-full h-[4rem] flex flex-col justify-between",
        className
      )}
    >
      <div className="flex items-center">
        {evaluation === PLACE_PURPOSE[0] && <Heart color="#F670C7" />}
        {evaluation === PLACE_PURPOSE[1] && <ChatIcon color="#FDB022" />}
        {evaluation === PLACE_PURPOSE[2] && <BookIcon />}
        {evaluation === PLACE_PURPOSE[3] && (
          <BusinessIcon color="#0BA5EC" color2="#0BA5EC80" />
        )}
        <span className="body1-medium text-text-gray-9 ml-[0.6rem] mr-[0.4rem]">
          {evaluation}
        </span>
        <span className="body1-medium text-text-gray-6">{percentage}</span>
      </div>
      <div className="w-full h-[1.2rem] rounded-[10px] bg-background-gray-2">
        <div
          className="h-full bg-primary-normal rounded-[10px]"
          style={{
            width: Number(percentage?.slice(0, -1)) + "%",
          }}
        />
      </div>
    </div>
  );
}
