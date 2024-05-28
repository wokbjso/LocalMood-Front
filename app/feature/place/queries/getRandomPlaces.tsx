"use server";

import ApiErrorMessage from "@/common/utils/error/api-error-message";
import { PlaceProps } from "../type";

export default async function GetRandomPlaces(): Promise<{
  [key: string]: PlaceProps[];
}> {
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
  if (!res.ok) throw new Error(ApiErrorMessage(res.status));

  const data = await res.json();
  return data;
}
