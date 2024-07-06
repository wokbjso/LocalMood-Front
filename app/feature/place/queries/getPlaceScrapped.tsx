import { getSession } from "@/common/utils/session/get-session";
import { PlaceScrappedResponse } from "./dto/place-scrapped";

export default async function GetPlaceScrapped(): Promise<PlaceScrappedResponse | null> {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
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
