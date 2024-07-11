import { PlaceDetailResponse } from "./dto/place-detail";
import ApiErrorMessage from "@/common/utils/error/api-error-message";

export default async function GetPlaceDetail(
  id: number
): Promise<PlaceDetailResponse> {
  console.log("hi");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) throw new Error(ApiErrorMessage(res.status));

  const data = await res.json();
  return data;
}
