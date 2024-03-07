"use client";

import { useEffect } from "react";

export default function KakaoRedirect({
  searchParams,
}: {
  searchParams: { code: string };
}) {
  const { code } = searchParams;
  const getAuthorization = async () => {
    const res = await fetch(`/api/kakao/authorize?code=${code}`);
  };
  useEffect(() => {
    getAuthorization();
  });
  return <div></div>;
}
