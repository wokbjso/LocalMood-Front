"use client";

import { queryFetchingSelector } from "@common/state/queryFetching";
import { toastInfo } from "@common/state/toast";
import revalidatePlaceDetail from "@feature/place/actions/revalidatePlaceDetail";
import revalidateScrapSpace from "@feature/place/actions/revalidateScrapSpace";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";

async function deleteCuration(data: { curationId: number }) {
  const res = await fetch(`/api/curation/delete`, {
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
  revalidatePlaceDetail();
};

export default function useDeleteCuration({
  triggeredAt,
}: {
  triggeredAt: string;
}) {
  const setIsQueryLoading = useSetRecoilState(queryFetchingSelector);
  const setToast = useSetRecoilState(toastInfo);

  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteCuration"],
    mutationFn: deleteCuration,
    onSuccess: () => {
      setToast({
        open: true,
        text: "큐레이션이 삭제되었습니다",
      });
      if (triggeredAt === "topBar") {
        location.replace("/curation");
      }
      setIsQueryLoading(false);
      revalidateRelatedData();
      queryClient.invalidateQueries({
        queryKey: ["getMyCuration"],
      });
    },
    onError: () => {
      alert("오류가 발생했습니다");
    },
  });
}
