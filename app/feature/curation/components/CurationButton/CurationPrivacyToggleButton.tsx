"use client";

import LockIcon from "@common/assets/icons/lock/lock.svg";
import UnlockIcon from "@common/assets/icons/lock/unlock.svg";
import { useState } from "react";

export default function CurationPrivacyToggleButton() {
  const [isPublic, setIsPublic] = useState(true);
  const togglePrivacy = () => {
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
