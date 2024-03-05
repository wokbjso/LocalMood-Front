import { getSession } from "@common/utils/getSession";

export default async function GetRandomCuration() {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/recommend`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      next: { tags: ["getRandomCuration"] },
    }
  );
  const data = await res.json();

  return data;
}
