import { ReactNode } from "react";
import { GraphProps } from "../type";
import { twMerge } from "tailwind-merge";

interface GraphGageProps extends Omit<GraphProps, "like"> {
  icon: ReactNode;
}

export default function GraphGage({
  icon,
  evaluation,
  percentage,
  className,
}: GraphGageProps) {
  return (
    <div
      className={twMerge(
        "w-full h-[4rem] flex flex-col justify-between",
        className
      )}
    >
      <div className="flex items-center">
        {icon}
        <span className="body1 text-text-gray-6 ml-[0.6rem] mr-[0.4rem]">
          {evaluation}
        </span>
        <span className="body1 text-text-gray-8">{percentage}</span>
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
