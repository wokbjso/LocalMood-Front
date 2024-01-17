"use client";
import ArrowIcon from "@common/assets/icons/arrow/arrow-left.svg";
import Indicator from "@common/components/ui/indicator/Indicator";
import { useRouter } from "next/navigation";

interface RecordTopBarProps {
  showIndicator: boolean;
  text: string;
}

export default function PlaceRecordTopBar({
  showIndicator,
  text,
}: RecordTopBarProps) {
  const router = useRouter();
  const handleBackClick = () => {
    router.back(); // 이전 페이지로 이동
  };

  const handleIndicator = (index: number) => {
    console.log(`Selected indicator index: ${index}`);
  };

  return (
    <div className="flex flex-col items-start w-full px-[2rem] py-[1.2rem] gap-[1.2rem]">
      <div onClick={handleBackClick}>
        <ArrowIcon />
      </div>
      <div className="flex justify-between items-start self-stretch">
        <div className="headline1-semibold text-black">{text}</div>
        {showIndicator && (
          <div className="flex h-[2.8rem] pl-[1.1rem] justify-end items-center">
            <Indicator
              index={1}
              handleIndicator={(index) => handleIndicator(index)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
