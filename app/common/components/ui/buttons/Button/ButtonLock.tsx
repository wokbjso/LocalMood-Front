"use client";
import React, { useState } from "react";
import LockIcon from "@common/assets/icons/lock/lock.svg";
import UnlockIcon from "@common/assets/icons/lock/unlock-color.svg";

interface ButtonLockProps {
  onClick?: (state: boolean) => void;
  initialValue: boolean;
}

export default function ButtonLock({
  onClick,
  initialValue = false,
}: ButtonLockProps) {
  const [isUnLocked, setIsUnLocked] = useState(initialValue);

  const toggleLock = () => {
    setIsUnLocked((prevIsLocked) => !prevIsLocked);
    onClick && onClick(isUnLocked);
  };

  return (
    <div
      className={`flex w-[8.3rem] px-[1.2rem] py-[0.6rem] justify-center items-center gap-[0.4rem] border ${
        !isUnLocked ? "border-text-gray-6" : "border-primary-normal" // 상태에 따라 border 색 변경
      } rounded-[100rem] body2-semibold ${
        !isUnLocked ? "text-text-gray-6" : "text-primary-normal" // 상태에 따라 텍스트 색 변경
      }`}
      onClick={toggleLock}
    >
      {!isUnLocked ? <LockIcon /> : <UnlockIcon />}
      {!isUnLocked ? "비공개" : "공개"}
    </div>
  );
}
