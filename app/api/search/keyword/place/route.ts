import { getSession } from "@/common/utils/session/get-session";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/filter?sort=${body.sortState}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: body.keyword,
      cache: "no-store",
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}
