"use client";

import { MyCurationResponse } from "@feature/curation/queries/dto/my-curation";
import { useQuery } from "@tanstack/react-query";

const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
const host =
  process?.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "localmood.co.kr";

async function getMyCuration() {
  const res = await fetch(`${protocol}://${host}/api/curation/my`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await res.json();
}

export default function useGetMyCuration() {
  return useQuery<MyCurationResponse>({
    queryKey: ["getMyCuration"],
    queryFn: () => getMyCuration(),
    suspense: true,
  });
}