"use client";

import { queryFetchingSelector } from "@common/state/queryFetching";
import { toastInfoSelector } from "@common/state/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";

async function makeCuration(data: {
  title: string;
  keyword: string;
  privacy: boolean;
}) {
  const res = await fetch(`/api/curation/make`, {
    method: "POST",
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

export default function useMakeCuration({
  openedAt = "modal",
}: {
  openedAt?: "page" | "modal";
}) {
  const setIsQueryFetching = useSetRecoilState(queryFetchingSelector);

  const setToast = useSetRecoilState(toastInfoSelector);

  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["makeCuration"],
    mutationFn: makeCuration,
    onSuccess: () => {
      if (openedAt === "page") {
        setIsQueryFetching(false);
      }
      setToast({
        open: true,
        text: "큐레이션이 생성되었습니다",
      });
      queryClient.invalidateQueries({
        queryKey: ["getMyCuration"],
      });
    },
    onError: () => {
      alert("큐레이션 생성 중 오류가 발생했습니다");
    },
  });
}
