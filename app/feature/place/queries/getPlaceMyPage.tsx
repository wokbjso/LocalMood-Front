import { NextRequest } from "next/server";

export default async function GetPlaceMyPage() {
  const token = "token from localStorage";
  const bearer = "Bearer " + token;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/review/member`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  return data;
}
