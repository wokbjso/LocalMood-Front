import React from "react";
import CompleteIcon from "@/common/assets/images/record-complete.svg";
import { useSetRecoilState } from "recoil";
import { myCurationModalInfoSelector } from "@/common/state/myCurationModal";
import TextWithRightArrow from "@/common/components/ui/text/TextWithRightArrow";
import Title from "@/common/components/ui/text/Title";

interface RecordCompleteProps {
  spaceId: number;
}

//Organism
export default function RecordComplete({ spaceId }: RecordCompleteProps) {
  const setMyCurationModal = useSetRecoilState(myCurationModalInfoSelector);
  const handleAddCurationButtonClick = () => {
    setMyCurationModal({
      open: true,
      spaceId: spaceId,
    });
  };
  return (
    <div className="absolute w-[100%] h-[100%] flex flex-col justify-center items-center">
      {
        <div className="pb-[10rem]">
          <CompleteIcon />
          <div className="w-full justify-center flex flex-col items-center mt-[22px]">
            <Title className="headline1-semibold mb-[12px]">
              공간 기록을 남겼어요!
            </Title>
            <TextWithRightArrow
              text="큐레이션에 추가하기"
              onClick={handleAddCurationButtonClick}
              textClassName="mr-[4px]"
            />
          </div>
        </div>
      }
    </div>
  );
}
