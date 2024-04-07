import React from "react";
import CompleteIcon from "@common/assets/images/record_complete.svg";
import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import { useSetRecoilState } from "recoil";
import { myCurationModalInfoSelector } from "@common/state/myCurationModal";

interface RecordCompleteProps {
  spaceId: number;
  handleIndicatorIndex: (index: number) => void;
  hasSomeData: boolean;
}

export default function RecordComplete({
  spaceId,
  handleIndicatorIndex,
  hasSomeData,
}: RecordCompleteProps) {
  const setMyCurationModal = useSetRecoilState(myCurationModalInfoSelector);
  const handleAddCurationButtonClick = () => {
    setMyCurationModal({
      open: true,
      spaceId,
    });
  };
  return (
    <>
      <div className="absolute w-[100%] h-[100%] flex flex-col justify-center items-center">
        {hasSomeData ? (
          <div className="pb-[10rem]">
            <CompleteIcon />
            <div className="w-full justify-center flex flex-col items-center mt-[2.2rem]">
              <div className="headline1-semibold text-black mb-[1.2rem]">
                공간 기록을 남겼어요!
              </div>
              <div
                className="flex items-center gap-[0.4rem] body2-semibold text-text-gray-6"
                onClick={handleAddCurationButtonClick}
              >
                <div>큐레이션에 추가하기</div>
                <div className="w-[1.6rem] flex justify-center items-center">
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <p className="headline1 w-[60%]">
              기록을 남기려면 키워드 선택 또는 사진을 업로드 해주세요
            </p>
            <div className="flex items-center mt-[1.3rem]">
              <p
                className="body2-semibold text-text-gray-6 mr-[0.4rem]"
                onClick={() => handleIndicatorIndex(0)}
              >
                키워드 선택하러 가기
              </p>
              <ArrowIcon />
            </div>
          </>
        )}
      </div>
    </>
  );
}
