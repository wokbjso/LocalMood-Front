"use client";

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

export default function UseDetectPageLeave(
  revalidateData?: () => Promise<void>
) {
  const router = useRouter();

  const handleBeforeUnload = useCallback(
    async (e: BeforeUnloadEvent) => {
      revalidateData && (await revalidateData());
    },
    [revalidateData]
  );

  const handlePopState = useCallback(async () => {
    revalidateData && (await revalidateData());
  }, [revalidateData]);

  useEffect(() => {
    const originalPush = router.push;
    const newPush = async (
      href: string,
      options?: NavigateOptions | undefined
    ): Promise<void> => {
      revalidateData && (await revalidateData());
      originalPush(href, options);
      return;
    };

    router.push = newPush;

    return () => {
      router.push = originalPush;
    };
  }, [router, revalidateData]);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [handleBeforeUnload, handlePopState]);
}
