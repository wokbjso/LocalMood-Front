import Indicator from "@/common/components/ui/indicator/Indicator";
import Title from "@/common/components/ui/text/Title";
import { twMerge } from "tailwind-merge";

interface RecordPageBookTopBarProps {
  text: string;
  indicatorIndex: number;
  handleIndicatorIndex?: (index: number) => void;
  className?: string;
}

//Organism
export default function RecordPageBookTopBar({
  text,
  indicatorIndex,
  handleIndicatorIndex,
  className,
}: RecordPageBookTopBarProps) {
  return (
    <div
      className={twMerge(
        "flex items-start w-full px-[2rem] pb-[1.2rem] pt-[4.8rem] fixed bg-white z-10",
        className
      )}
    >
      <div className="w-full flex justify-between items-start">
        <Title title={text} className="headline1-semibold" />
        <Indicator
          clickAble={false}
          indicatorIndex={indicatorIndex}
          handleIndicatorIndex={handleIndicatorIndex}
          className="pt-[1.1rem] pl-[1.1rem]"
        />
      </div>
    </div>
  );
}
