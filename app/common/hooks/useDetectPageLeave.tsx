// "use client";

// import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
// import { useRouter } from "next/navigation";
// import { useCallback, useEffect } from "react";

// export default function UseDetectPageLeave(
//   revalidateData: () => Promise<void>,
//   needToModify: boolean
// ) {
//   const router = useRouter();

//   const handleBeforeUnload = useCallback(
//     async (e: BeforeUnloadEvent) => {
//       if (needToModify) await revalidateData();
//     },
//     [needToModify, revalidateData]
//   );

//   const handlePopState = useCallback(async () => {
//     if (needToModify) await revalidateData();
//   }, [needToModify, revalidateData]);

//   useEffect(() => {
//     const originalPush = router.push;
//     const newPush = async (
//       href: string,
//       options?: NavigateOptions | undefined
//     ): Promise<void> => {
//       if (needToModify) await revalidateData();
//       originalPush(href, options);
//       return;
//     };

//     router.push = newPush;

//     return () => {
//       router.push = originalPush;
//     };
//   }, [router, revalidateData, needToModify]);

//   useEffect(() => {
//     window.addEventListener("beforeunload", handleBeforeUnload);
//     window.addEventListener("popstate", handlePopState);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//       window.removeEventListener("popstate", handlePopState);
//     };
//   }, [handleBeforeUnload, handlePopState]);
// }
