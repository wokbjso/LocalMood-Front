"use client";

import { queryFetchingSelector } from "@/common/state/queryFetching";
import { toastInfoSelector } from "@/common/state/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import revalidateCurationDetail from "../actions/revalidateCurationDetail";

async function editCuration(data: {
  id?: number;
  title: string;
  keyword: string;
  privacy: boolean;
}) {
  const res = await fetch(`/api/curation/edit`, {
    method: "PATCH",
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

export default function useEditCuration() {
  const setIsQueryFetching = useSetRecoilState(queryFetchingSelector);

  const setToast = useSetRecoilState(toastInfoSelector);

  const queryClient = useQueryClient();

  const revalidateRelatedData = () => {
    revalidateCurationDetail();
  };

  return useMutation({
    mutationKey: ["editCuration"],
    mutationFn: editCuration,
    onSuccess: () => {
      setIsQueryFetching(false);
      setToast({
        open: true,
        text: "큐레이션이 수정되었습니다",
      });
      revalidateRelatedData();
      queryClient.invalidateQueries({
        queryKey: ["getMyCuration"],
      });
    },
    onError: () => {
      alert("큐레이션 수정 중 오류가 발생했습니다");
    },
  });
}
