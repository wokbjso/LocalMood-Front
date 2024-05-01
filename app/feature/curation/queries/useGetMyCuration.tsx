"use client";

import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
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
  return res.json();
}

export default function useGetMyCuration() {
  return useQuery<MyCurationResponse>({
    queryKey: ["getMyCuration"],
    queryFn: getMyCuration,
    suspense: true,
  });
}
