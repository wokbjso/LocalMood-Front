"use client";
import React, { useState } from "react";
import LockIcon from "@common/assets/icons/lock/lock.svg";
import UnlockIcon from "@common/assets/icons/lock/unlock-color.svg";

export default function ButtonLock() {
  const [isLocked, setIsLocked] = useState(true);

  const toggleLock = () => {
    setIsLocked((prevIsLocked) => !prevIsLocked);
  };

  return (
    <div
      className={`flex w-[8.3rem] px-[1.2rem] py-[0.6rem] justify-center items-center gap-[0.4rem] border ${
        isLocked ? "border-text-gray-6" : "border-primary-normal" // 상태에 따라 border 색 변경
      } rounded-[100rem] body2-semibold ${
        isLocked ? "text-text-gray-6" : "text-primary-normal" // 상태에 따라 텍스트 색 변경
      }`}
      onClick={toggleLock}
    >
      {isLocked ? <LockIcon /> : <UnlockIcon />}
      {isLocked ? "비공개" : "공개"}
    </div>
  );
}
