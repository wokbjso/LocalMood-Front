"use server";

import ErrorMessage from "@/common/utils/error/error-message";

export default async function GetRandomPlaces() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/recommend`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      next: { tags: ["getHomeRecommend"] },
    }
  );
  if (!res.ok) throw new Error(ErrorMessage(res.status));

  const data = await res.json();
  return data;
}
