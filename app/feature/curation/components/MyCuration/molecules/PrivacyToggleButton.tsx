"use client";

import LockIcon from "@common/assets/icons/lock/LockIcon";
import UnlockIcon from "@common/assets/icons/lock/UnlockIcon";
import useFetching from "@common/hooks/useFetching";
import { toastInfoSelector } from "@common/state/toast";
import revalidateCurationDetail from "@feature/curation/actions/revalidateCurationDetail";
import revalidatePlaceDetail from "@feature/place/actions/revalidatePlaceDetail";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
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

  const { isFetching, changeFetching } = useFetching();
  const [show, setShow] = useState(privacy);

  const togglePrivacy = async () => {
    const res = await fetch(`/api/curation/privacy/toggle/${id}`);

    return res.status;
  };

  const revalidateRelatedData = () => {
    revalidateCurationDetail();
    revalidatePlaceDetail();
    queryClient.invalidateQueries(["getMyCuration"]);
  };

  const handleClickTogglePrivacy = async () => {
    setShow((prev) => !prev);
    privacy
      ? setToast({
          open: true,
          text: "비공개로 변경되었습니다",
        })
      : setToast({
          open: true,
          text: "공개로 변경되었습니다",
        });
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (privacy === show) return;
      if (isFetching) {
        alert("이전 요청을 처리중입니다");
        return;
      } else {
        changeFetching(true);
        if ((await togglePrivacy()) === 200) {
          changeFetching(false);
          revalidateRelatedData();
        }
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <>
      <div
        className="flex items-center gap-[0.4rem] body3-medium text-text-gray-8"
        onClick={handleClickTogglePrivacy}
      >
        {show ? <UnlockIcon /> : <LockIcon />}
        {show ? "공개" : "비공개"}
      </div>
    </>
  );
}
