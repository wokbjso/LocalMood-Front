import { GraphProps } from "./type";
import Like from "@common/assets/icons/like/like-good.svg";
import DisLike from "@common/assets/icons/like/like-bad.svg";
import { twMerge } from "tailwind-merge";

export default function GraphUpDownVote({
  evaluation,
  percentage,
  like,
}: GraphProps) {
  return (
    <div
      className={twMerge(
        "flex items-center w-full h-[3.2rem] bg-background-gray-2 rounded-[100px]",
        like ? "pr-[1.2rem]" : "pl-[1.2rem]"
      )}
    >
      {like && (
        <div className="flex justify-center items-center w-[3.2rem] h-[3.2rem] mr-[0.8rem] bg-black rounded-full">
          <Like />
        </div>
      )}
      <span className="body2-medium text-black mr-[0.6rem]">{evaluation}</span>
      <span className="body2-semibold text-text-gray-5">{percentage}</span>
      {!like && (
        <div className="flex justify-center items-center w-[3.2rem] h-[3.2rem] ml-[0.8rem] bg-primary-normal rounded-full">
          <DisLike />
        </div>
      )}
    </div>
  );
}
