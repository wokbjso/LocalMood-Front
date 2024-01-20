"use client";
import React, { useState } from "react";
import CompleteIcon from "@common/assets/images/record_complete.svg";
import ArrowIcon from "@common/assets/icons/arrow/arrow-right.svg";
import BottomAppBar from "../BottomAppBar/BottomAppBar";

import SaveModal from "../Modal/SaveModal";

export default function RecordComplete() {
  const [isAddCuration, setIsAddCuration] = useState(false);

  const handleAddCurationButtonClick = () => {
    setIsAddCuration(true);
  };
  const handleCloseModal = () => {
    setIsAddCuration(false);
  };

  return (
    <div>
      <div className={isAddCuration ? "bg-black opacity-50" : "bg-white"}>
        <div className="w-full pt-[19.6rem]">
          <div className="flex w-full justify-center items-center pl-[3rem] pr-[2.9rem] pb-[2.2rem]">
            <CompleteIcon />
          </div>
          <div className="w-full justify-center items-center inline-flex flex-col items-center">
            <div className="record-complete text-black pb-[1.2rem]">
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
            <div className="fixed bottom-0 left-0 right-0 z-10">
              <BottomAppBar />
            </div>
          </div>
        </div>
      </div>
      {isAddCuration && (
        <div className="fixed bottom-0 left-0 right-0 z-100">
          <SaveModal onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
}
