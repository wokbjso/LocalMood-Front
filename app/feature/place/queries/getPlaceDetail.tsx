import { getSession } from "@/common/utils/session/getSession";
import { PlaceDetailResponse } from "./dto/place-detail";

export default async function GetPlaceDetail(
  id: number
): Promise<PlaceDetailResponse> {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "force-cache",
      next: { tags: ["getPlaceDetail"] },
    }
  );
  const data = await res.json();

  return data;
}
