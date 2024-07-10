"use client";

import { queryFetchingSelector } from "@/common/state/query-fetching";
import { toastInfoSelector } from "@/common/state/toast";
import revalidateScrapSpace from "@/feature/place/actions/revalidateScrapSpace";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";

async function curationSpaceDelete(data: {
  curationId: number;
  spaceId: number;
}) {
  const res = await fetch(`/api/curation/delete/space`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.status === 400) {
    throw new Error("Error Occured");
  }
  return;
}

const revalidateRelatedData = () => {
  revalidateScrapSpace();
};

export default function useCurationSpaceDelete(count: number) {
  const queryClient = useQueryClient();

  const setToast = useSetRecoilState(toastInfoSelector);
  const setIsQueryFetching = useSetRecoilState(queryFetchingSelector);

  return useMutation({
    mutationKey: ["curationSpaceDelete"],
    mutationFn: curationSpaceDelete,
    onSuccess: () => {
      setIsQueryFetching(false);
      setToast({
        open: true,
        text: "스크랩이 해제되었습니다",
      });
      revalidateRelatedData();
      queryClient.invalidateQueries({
        queryKey: ["getMyCuration"],
      });
    },
    onError: () => {
      if (count > 0) {
        alert("이미 처리된 요청입니다");
        setIsQueryFetching(false);
        return;
      }
      alert("오류가 발생했습니다");
    },
  });
}
