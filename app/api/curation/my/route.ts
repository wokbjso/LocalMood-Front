import { NextRequest } from "next/server";

export default async function GET() {
  const token = "token from localStorage";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/curation/member`,
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
