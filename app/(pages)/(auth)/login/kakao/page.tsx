"use client";

import { useEffect } from "react";

export default function KakaoRedirect({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const { code } = searchParams;
  useEffect(() => {
    const getAuthorization = async () => {
      const res = await fetch(`/api/auth/login/kakao?code=${code}`);
      if (res.status === 200) {
        location.replace("/");
      }
      if (res.status === 400) {
        alert("로그인 과정에서 문제가 발생했습니다");
      }
    };
    getAuthorization();
  }, [code]);
  return <div>로그인 중입니다...</div>;
}
