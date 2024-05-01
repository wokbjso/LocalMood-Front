"use client";

import LoadingUI from "@common/components/ui/loading/LoadingUI";
import { useEffect } from "react";

export default function KakaoRedirectPage({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const { code } = searchParams;
  useEffect(() => {
    const getAuthorization = async () => {
      const res = await fetch(`/api/auth/login/kakao/${code}`);
      if (res.status === 200) {
        location.replace("/");
      }
      if (res.status === 400) {
        alert("로그인 과정에서 문제가 발생했습니다");
      }
    };
    getAuthorization();
  }, [code]);
  return <LoadingUI />;
}
