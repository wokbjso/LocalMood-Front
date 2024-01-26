import { NextRequest } from "next/server";

export default async function GetPlaceReview(category: string, id: string) {
  const query = `?type=${category}`;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/review/space/${id}` + query,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
