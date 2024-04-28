"use client";

import LockIcon from "@common/assets/icons/lock/lock.svg";
import UnlockIcon from "@common/assets/icons/lock/unlock.svg";
import { toastInfoSelector } from "@common/state/toast";
import revalidateCurationDetail from "@feature/curation/actions/revalidateCurationDetail";
import revalidateMyCuration from "@feature/curation/actions/revalidateMyCuration";
import revalidatePlaceDetail from "@feature/place/actions/revalidatePlaceDetail";
import { useSetRecoilState } from "recoil";

interface PrivacyToggleButtonProps {
  id: number;
  privacy: boolean;
}

//Molecule
export default function PrivacyToggleButton({
  id,
  privacy,
}: PrivacyToggleButtonProps) {
  const setToast = useSetRecoilState(toastInfoSelector);

  const togglePrivacy = async () => {
    const res = await fetch(`/api/curation/privacy/toggle/${id}`);

    return res.status;
  };

  const revalidateRelatedData = () => {
    revalidateCurationDetail();
    revalidatePlaceDetail();
    revalidateMyCuration();
  };

  const handleClickTogglePrivacy = async () => {
    if ((await togglePrivacy()) === 200) {
      revalidateRelatedData();
      privacy
        ? setToast({
            open: true,
            text: "비공개로 변경되었습니다",
          })
        : setToast({
            open: true,
            text: "공개로 변경되었습니다",
          });
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
    </>
  );
}
