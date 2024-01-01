import { twMerge } from "tailwind-merge";

interface IndicatorShapeProps {
  indicate?: boolean;
}

export default function IndicatorShape({
  indicate = false,
}: IndicatorShapeProps) {
  return (
    <div
      className={twMerge(
        "mx-[3px]",
        indicate
          ? "w-[2.4rem] h-[0.5rem] bg-primary-normal rounded-[34px]"
          : "w-[0.5rem] h-[0.5rem] bg-gray-3 rounded-full"
      )}
    />
  );
}
