"use server";

export default async function GetRandomPlaces() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/recommend`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
      next: { tags: ["getHomeRecommend"] },
    }
  );
  const data = await res.json();

  return data;
}
