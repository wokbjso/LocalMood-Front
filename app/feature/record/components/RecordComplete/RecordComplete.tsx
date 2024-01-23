"use client";
import React, { useState } from "react";
import CompleteIcon from "@common/assets/images/record_complete.svg";
import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import SaveModal from "../Modal/SaveModal";
import Button from "@common/components/ui/buttons/Button/Button";

interface RecordCompleteProps {
  cafeKeywordData: { [key: string]: string | Array<string> };
}

export default function RecordComplete({
  cafeKeywordData,
}: RecordCompleteProps) {
  const [isAddCuration, setIsAddCuration] = useState(false);

  const handleAddCurationButtonClick = () => {
    setIsAddCuration(true);
    document.body.style.overflow = "hidden";
  };
  const handleCloseModal = () => {
    setIsAddCuration(false);
    document.body.style.overflow = "unset";
  };

  const hasSomeData = () => {
    return (
      Object.keys(cafeKeywordData).filter((k) => {
        if (typeof k === "string") cafeKeywordData[k] !== "";
        else if (Array.isArray(cafeKeywordData[k]))
          cafeKeywordData[k].length > 0;
      }).length > 0
    );
  };

  return (
    <>
      <div className="w-full h-[100vh] flex flex-col justify-center items-center">
        {hasSomeData() ? (
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
              <p className="body2-semibold text-text-gray-6 mr-[0.4rem]">
                키워드 선택하러 가기
              </p>
              <ArrowIcon />
            </div>
          </>
        )}
        <div className="fixed h-[15.5rem] bottom-0 bg-white">
          <Button>{hasSomeData() ? "기록올리기" : "종료하기"}</Button>
        </div>
      </div>
      {isAddCuration && (
        <div className="fixed bottom-0 left-0 right-0 z-10">
          <SaveModal onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
}
