import { NextRequest } from "next/server";

export default async function GetPlaceReview(id: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/review/space/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
