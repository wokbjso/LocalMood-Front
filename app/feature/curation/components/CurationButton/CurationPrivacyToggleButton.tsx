"use client";

import LockIcon from "@common/assets/icons/lock/lock.svg";
import UnlockIcon from "@common/assets/icons/lock/unlock.svg";
import { useState } from "react";

interface CurationPrivacyToggleButtonProps {
  id: number;
}

export default function CurationPrivacyToggleButton({
  id,
}: CurationPrivacyToggleButtonProps) {
  const [isPublic, setIsPublic] = useState(true);
  const togglePrivacy = () => {
    //id를 이용하여 공개 상태 변경하는 api 호출
    setIsPublic((prevState) => !prevState);
  };

  return (
    <div
      className="flex items-center gap-[0.4rem] body3-medium text-text-gray-8"
      onClick={togglePrivacy}
    >
      {isPublic ? <LockIcon /> : <UnlockIcon />}
      {isPublic ? "비공개" : "공개"}
    </div>
  );
}
