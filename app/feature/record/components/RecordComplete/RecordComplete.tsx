import React, { useState } from "react";
import CompleteIcon from "@common/assets/images/record_complete.svg";
import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import SaveModal from "../Modal/SaveModal";
import Button from "@common/components/ui/buttons/Button/Button";
import LinkLayout from "@common/components/layout/LinkLayout/LinkLayout";

interface RecordCompleteProps {
  placeType: string;
  spaceId: number;
  handleIndicatorIndex: (index: number) => void;
  cafeKeywordData: { [key: string]: string | Array<string> };
  restaurantKeywordData: { [key: string]: string | Array<string> };
}

export default function RecordComplete({
  placeType,
  spaceId,
  handleIndicatorIndex,
  cafeKeywordData,
  restaurantKeywordData,
}: RecordCompleteProps) {
  const [isAddCuration, setIsAddCuration] = useState(false);
  const handleAddCurationButtonClick = () => {
    setIsAddCuration(true);
  };
  const handleCloseModal = () => {
    setIsAddCuration(false);
  };

  const hasSomeData =
    placeType === "CAFE"
      ? Object.keys(cafeKeywordData).some((k) => {
          if (typeof cafeKeywordData[k] === "string")
            return cafeKeywordData[k] !== "";
          else if (Array.isArray(cafeKeywordData[k]))
            return cafeKeywordData[k].length > 0;
          return false;
        })
      : Object.keys(restaurantKeywordData).some((k) => {
          if (typeof restaurantKeywordData[k] === "string")
            return restaurantKeywordData[k] !== "";
          else if (Array.isArray(restaurantKeywordData[k]))
            return restaurantKeywordData[k].length > 0;
          return false;
        });

  return (
    <>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
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
        <div className="fixed  h-[13.2rem] bottom-0 bg-white">
          <LinkLayout routeUrl="/record">
            <Button>{hasSomeData ? "완료" : "종료하기"}</Button>
          </LinkLayout>
        </div>
      </div>
      {isAddCuration && (
        <SaveModal spaceId={spaceId} handleModalFn={setIsAddCuration} />
      )}
    </>
  );
}
