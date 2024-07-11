import ApiErrorMessage from "@/common/utils/error/api-error-message";
import { useQuery } from "@tanstack/react-query";
import { PlaceRelatedInfoResponse } from "./dto/place-detail";

const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
const host =
  process?.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "www.localmood.co.kr";

async function getPlaceRelatedInfo(id: number) {
  const res = await fetch(`${protocol}://${host}/api/place/related/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) throw new Error(ApiErrorMessage(res.status));

  return res.json();
}

export default function useGetPlaceRelatedInfo(id: number) {
  return useQuery<PlaceRelatedInfoResponse>({
    queryKey: ["getPlaceRelatedInfo", id],
    queryFn: () => getPlaceRelatedInfo(id),
  });
}
