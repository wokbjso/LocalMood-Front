"use client";

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function UseDetectPageLeave(
  revalidateData: () => Promise<void>,
  modifyNeededData: { id: number; state: boolean }[]
) {
  const router = useRouter();

  const curationScrapAdd = async (id: number) => {
    const res = await fetch(`/api/curation/scrap/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.status;
  };

  const curationScrapDelete = async (id: number) => {
    const res = await fetch(`/api/curation/scrap/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res.status;
  };

  const activateModify = useCallback(async () => {
    if (modifyNeededData.length === 0) return;
    for (const { id, state } of modifyNeededData) {
      if (state) {
        if ((await curationScrapAdd(id)) === 200) continue;
        else alert("오류가 발생했습니다");
      } else {
        if ((await curationScrapDelete(id)) === 200) continue;
        else alert("오류가 발생했습니다");
      }
    }
  }, [modifyNeededData]);

  const handleBeforeUnload = useCallback(
    async (e: BeforeUnloadEvent) => {
      await activateModify().then(() => revalidateData());
    },
    [revalidateData, activateModify]
  );

  const handlePopState = useCallback(async () => {
    await activateModify().then(() => revalidateData());
  }, [revalidateData, activateModify]);

  useEffect(() => {
    const originalPush = router.push;
    const newPush = async (
      href: string,
      options?: NavigateOptions | undefined
    ): Promise<void> => {
      await activateModify().then(() => revalidateData());
      originalPush(href, options);
      return;
    };

    router.push = newPush;

    return () => {
      router.push = originalPush;
    };
  }, [activateModify, revalidateData, router]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [handleBeforeUnload, handlePopState]);
}
