import CheckIcon from "@common/assets/icons/check/CheckIcon";
import { twMerge } from "tailwind-merge";

interface ImageWrapperProps {
  text: string;
  className?: string;
}

export default function ImageWrapper({ text, className }: ImageWrapperProps) {
  return (
    <>
      <div
        className={twMerge(
          "w-[6rem] h-[6rem] absolute top-0 left-0 bg-primary-normal z-10 opacity-[0.8] rounded-[8px]",
          className
        )}
      />
      <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center z-10">
        <CheckIcon className="mb-[0.4rem]" />
        <span className="text-white body3-semibold whitespace-nowrap">
          {text}
        </span>
      </div>
    </>
  );
}
