import { getSession } from "@common/utils/getSession";
import { PlaceScrappedResponse } from "./dto/place-scrapped";

export default async function GetPlaceScrapped(): Promise<PlaceScrappedResponse> {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/members/me/scraps/space`,
    {
      next: { tags: ["getPlaceScrapped"] },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  return data;
}