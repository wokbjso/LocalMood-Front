"use client";

import { useQuery } from "@tanstack/react-query";
import { SearchPlaceResponse } from "./dto/search-type";

const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
const host =
  process?.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "localmood.co.kr";

async function getTextSearchPlaceData(data: {
  sortState: string;
  name?: string;
}): Promise<SearchPlaceResponse> {
  const res = await fetch(`${protocol}://${host}/api/search/text/place`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export default function useGetTextSearchPlaceData(data: {
  sortState: string;
  name?: string;
}) {
  return useQuery({
    queryKey: ["getTextSearchPlaceData", data],
    queryFn: () => getTextSearchPlaceData(data),
    onSuccess: () => {},
    onError: () => {
      alert("검색 중 오류가 발생했습니다");
    },
    enabled: !!data.name,
    suspense: true,
  });
}
