import { PlaceDetailResponse } from "./dto/place-detail";

export default async function GetPlaceDetail(
  id: number
): Promise<PlaceDetailResponse> {
  const token = "token from localStorage";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
