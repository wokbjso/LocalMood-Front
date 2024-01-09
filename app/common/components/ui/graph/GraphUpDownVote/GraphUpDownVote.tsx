import { GraphProps } from "../type";
import Like from "@common/assets/icons/like/like-good.svg";
import DisLike from "@common/assets/icons/like/like-bad.svg";
import { twMerge } from "tailwind-merge";

export default function GraphUpDownVote({
  evaluation,
  percentage,
  like,
  className,
}: GraphProps) {
  return (
    <div
      className={twMerge(
        "inline-block bg-white pl-[0.4rem] py-[0.2rem] rounded-[36px] border-[0.1rem] border-line-gray-3",
        like ? "pr-[1.2rem]" : "pl-[1.2rem]",
        className
      )}
    >
      <div className="flex items-center">
        {like && <Like />}
        <span className="body2-medium text-black mr-[0.6rem]">
          {evaluation}
        </span>
        <span className="body2-semibold text-text-gray-5">{percentage}</span>
        {!like && (
          <div className="flex justify-center items-center w-[3.2rem] h-[3.2rem] ml-[0.8rem] bg-primary-normal rounded-full">
            <DisLike />
          </div>
        )}
      </div>
    </div>
  );
}
