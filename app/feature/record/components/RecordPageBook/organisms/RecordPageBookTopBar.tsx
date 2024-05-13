import Indicator from "@/common/components/ui/indicator/Indicator";
import { twMerge } from "tailwind-merge";

interface RecordTopBarProps {
  showIndicator: boolean;
  text: string;
  indicatorIndex: number;
  handleIndicatorIndex?: (index: number) => void;
  className?: string;
}

//Organism
export default function RecordPageBookTopBar({
  showIndicator,
  text,
  indicatorIndex,
  handleIndicatorIndex,
  className,
}: RecordTopBarProps) {
  return (
    <div
      className={twMerge(
        "flex items-start w-full px-[2rem] pb-[1.2rem] pt-[4.8rem] fixed bg-white z-10",
        className
      )}
    >
      <div className="w-full flex justify-between items-start">
        <div className="headline1-semibold text-black">{text}</div>
        {showIndicator && (
          <div className="flex h-[2.8rem] pl-[1.1rem] justify-end items-center">
            <Indicator
              clickAble={false}
              indicatorIndex={indicatorIndex}
              handleIndicatorIndex={handleIndicatorIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
}
