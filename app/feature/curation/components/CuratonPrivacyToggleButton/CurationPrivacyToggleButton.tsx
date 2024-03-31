"use client";

import LockIcon from "@common/assets/icons/lock/lock.svg";
import UnlockIcon from "@common/assets/icons/lock/unlock.svg";
import Toast from "@common/components/ui/toast/Toast";
import useToast from "@common/hooks/useToast";
import revalidateCurationDetail from "@feature/curation/actions/revalidateCurationDetail";

interface CurationPrivacyToggleButtonProps {
  id: number;
  privacy: boolean;
}

export default function CurationPrivacyToggleButton({
  id,
  privacy,
}: CurationPrivacyToggleButtonProps) {
  const { isToastOpen, toastText, openToast } = useToast();

  const togglePrivacy = async () => {
    const res = await fetch(`/api/curation/privacy/toggle/${id}`);

    return res.status;
  };

  const revalidateRelatedData = () => {
    revalidateCurationDetail();
  };

  const handleClickTogglePrivacy = async () => {
    if ((await togglePrivacy()) === 200) {
      revalidateRelatedData();
      privacy
        ? openToast("비공개로 변경되었습니다")
        : openToast("공개로 변경되었습니다");
    }
  };

  return (
    <>
      <div
        className="flex items-center gap-[0.4rem] body3-medium text-text-gray-8"
        onClick={handleClickTogglePrivacy}
      >
        {privacy ? <UnlockIcon /> : <LockIcon />}
        {privacy ? "공개" : "비공개"}
      </div>
      <Toast open={isToastOpen} text={toastText} />
    </>
  );
}
