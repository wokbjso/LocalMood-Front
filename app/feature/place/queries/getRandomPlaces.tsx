import { getSession } from "@common/utils/getSession";

export default async function GetRandomPlaces() {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/recommend`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["getHomeRecommend"] },
    }
  );
  const data = await res.json();

  return data;
}
