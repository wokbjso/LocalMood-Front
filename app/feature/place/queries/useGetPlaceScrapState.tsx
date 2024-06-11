"use client";

import ApiErrorMessage from "@/common/utils/error/api-error-message";
import { useQuery } from "@tanstack/react-query";

const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
const host =
  process?.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "www.localmood.co.kr";

async function getPlaceScrapState(id: number) {
  const res = await fetch(`${protocol}://${host}/api/place/scrap/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(ApiErrorMessage(res.status));

  return res.json();
}

export default function useGetPlaceScrapState(id: number) {
  return useQuery<{ isScraped: boolean }>({
    queryKey: ["getPlaceScrapState", id],
    queryFn: () => getPlaceScrapState(id),
  });
}
