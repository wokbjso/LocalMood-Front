"use client";

import { useQuery } from "@tanstack/react-query";
import { SearchPlaceResponse } from "./dto/search-type";

async function getKeywordSearchPlaceData(data: {
  sortState: string;
  keyword?: string;
}): Promise<SearchPlaceResponse> {
  const res = await fetch(`/api/search/keyword/place`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
}

export default function useGetKeywordSearchPlaceData(data: {
  sortState: string;
  keyword?: string;
}) {
  return useQuery({
    queryKey: ["getKeywordSearchPlaceData", data],
    queryFn: () => getKeywordSearchPlaceData(data),
    onSuccess: () => {},
    onError: () => {
      alert("검색 중 오류가 발생했습니다");
    },
    enabled: !!data.keyword,
    suspense: true,
  });
}
