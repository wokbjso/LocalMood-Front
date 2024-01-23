"use client";
import ArrowIcon from "@common/assets/icons/arrow/arrow-left.svg";
import Indicator from "@common/components/ui/indicator/Indicator";
import { useRouter } from "next/navigation";

interface RecordTopBarProps {
  showIndicator: boolean;
  indicatorIndex: number;
  text: string;
}

export default function PlaceRecordTopBar({
  showIndicator,
  indicatorIndex,
  text,
}: RecordTopBarProps) {
  const router = useRouter();
  const handleBackClick = () => {
    router.back(); // 이전 페이지로 이동
  };
  const handleIndicator = (index: number) => {};

  return (
    <div className="flex flex-col items-start w-full px-[2rem] py-[1.2rem] gap-[1.2rem] fixed bg-white">
      <div onClick={handleBackClick}>
        <ArrowIcon />
      </div>
      <div className="flex justify-between items-start self-stretch">
        <div className="headline1-semibold text-black">{text}</div>
        {showIndicator && (
          <div className="flex h-[2.8rem] pl-[1.1rem] justify-end items-center">
            <Indicator
              index={indicatorIndex}
              handleIndicator={(index) => handleIndicator(index)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
