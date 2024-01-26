import { NextRequest } from "next/server";

export default async function GET(request: NextRequest) {
  const token = "token from localStorage";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/v1/members/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  return data;
}
