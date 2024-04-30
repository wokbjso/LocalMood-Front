"use client";

import { useQuery } from "@tanstack/react-query";
import { SearchPlaceResponse } from "./dto/search-type";

async function getTextSearchPlaceData(data: {
  sortState: string;
  name?: string;
}): Promise<SearchPlaceResponse> {
  const res = await fetch(`/api/search/text/place`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
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
  });
}
