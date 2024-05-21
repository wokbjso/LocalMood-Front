"use client";

import ApiErrorMessage from "@/common/utils/error/api-error-message";
import { MyCurationResponse } from "@/feature/curation/queries/dto/my-curation";
import { useQuery } from "@tanstack/react-query";

const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
const host =
  process?.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "www.localmood.co.kr";

async function getMyCuration() {
  const res = await fetch(`${protocol}://${host}/api/curation/my`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(ApiErrorMessage(res.status));

  return res.json();
}

export default function useGetMyCuration() {
  return useQuery<MyCurationResponse>({
    queryKey: ["getMyCuration"],
    queryFn: getMyCuration,
    retry: 0,
    suspense: true,
  });
}
