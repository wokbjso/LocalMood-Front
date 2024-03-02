"use server";

export default async function GetRandomPlaces() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/recommend`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: { tags: ["getHomeRecommend"] },
    }
  );
  const data = await res.json();

  return data;
}
