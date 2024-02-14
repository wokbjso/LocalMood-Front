import { getSession } from "@common/utils/getSession";
import { PlaceScrappedResponse } from "./dto/place-scrapped";

export default async function GetPlaceScrapped(): Promise<PlaceScrappedResponse> {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/members/me/scraps/space`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["getPlaceScrapped"] },
      cache: "force-cache",
    }
  );
  const data = await res.json();

  return data;
}
