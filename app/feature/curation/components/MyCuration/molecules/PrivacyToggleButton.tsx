"use client";

import LockIcon from "@/common/assets/icons/lock/LockIcon";
import UnlockIcon from "@/common/assets/icons/lock/UnlockIcon";
import { queryFetchingSelector } from "@/common/state/queryFetching";
import { toastInfoSelector } from "@/common/state/toast";
import revalidateCurationDetail from "@/feature/curation/actions/revalidateCurationDetail";
import revalidatePlaceDetail from "@/feature/place/actions/revalidatePlaceDetail";
import { useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  const setToast = useSetRecoilState(toastInfoSelector);

  const setIsQueryFetching = useSetRecoilState(queryFetchingSelector);

  const togglePrivacy = async () => {
    const res = await fetch(`/api/curation/privacy/toggle/${id}`);

    return res.status;
  };

  const revalidateRelatedData = async () => {
    await revalidateCurationDetail().then(() => {
      setIsQueryFetching(false);
    });
    revalidatePlaceDetail();
    queryClient.invalidateQueries(["getMyCuration"]);
  };

  const handleClickTogglePrivacy = async () => {
    setIsQueryFetching(true);
    if ((await togglePrivacy()) === 200) {
      privacy
        ? setToast({
            open: true,
            text: "비공개로 변경되었습니다",
          })
        : setToast({
            open: true,
            text: "공개로 변경되었습니다",
          });
      revalidateRelatedData();
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
