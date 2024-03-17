"use client";

import { useEffect } from "react";
import { BeatLoader } from "react-spinners";

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
  return (
    <div className="flex justify-center items-center h-[100vh] header-light">
      <BeatLoader color="#36d7b7" className="z-50" />
    </div>
  );
}
