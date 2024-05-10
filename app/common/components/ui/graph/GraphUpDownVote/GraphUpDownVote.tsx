import LikeBadIcon from "@/common/assets/icons/like/LikeBadIcon";
import { GraphProps } from "../type";
import { twMerge } from "tailwind-merge";
import LikeGoodIcon from "@/common/assets/icons/like/LikeGoodIcon";

export default function GraphUpDownVote({
  variant = "diff",
  evaluation,
  percentage,
  like,
  className,
}: GraphProps & { className?: string }) {
  return (
    <div
      className={twMerge(
        " bg-white pl-[0.4rem] py-[0.2rem] rounded-[36px] border-[0.1rem] border-line-gray-3",
        variant === "diff" ? (like ? "pr-[1.2rem]" : "pl-[1.2rem]") : null,
        variant === "unite" && "pr-[1.2rem]",
        className
      )}
    >
      <div className="flex items-center">
        {!like && (
          <span className="body2-semibold text-text-gray-5">
            {percentage && percentage}
          </span>
        )}
        {like && <LikeGoodIcon />}
        {!like && variant === "unite" && <LikeBadIcon />}
        <span
          className={twMerge(
            "body2-medium text-black",
            variant === "diff" && like && "mr-[0.6rem]",
            variant === "diff" && !like && "ml-[0.6rem]"
          )}
        >
          {evaluation}
        </span>
        {like && (
          <span className="body2-semibold text-text-gray-5">
            {percentage && percentage}
          </span>
        )}
        {variant === "diff" && !like && (
          <div className="flex justify-center items-center w-[3.2rem] h-[3.2rem] rounded-full">
            <LikeBadIcon />
          </div>
        )}
      </div>
    </div>
  );
}
