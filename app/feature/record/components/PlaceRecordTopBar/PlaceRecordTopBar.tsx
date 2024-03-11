import Indicator from "@common/components/ui/indicator/Indicator";

interface RecordTopBarProps {
  showIndicator: boolean;
  text: string;
  indicatorIndex: number;
  handleIndicatorIndex?: (index: number) => void;
}

export default function PlaceRecordTopBar({
  showIndicator,
  text,
  indicatorIndex,
  handleIndicatorIndex,
}: RecordTopBarProps) {
  return (
    <div className="flex items-start w-full px-[2rem] pb-[1.2rem] pt-[4.8rem] fixed bg-white z-10">
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
