import { getSession } from "@common/utils/session/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/filter`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword1: body[0],
        keyword2: body.length > 1 && body[1],
      }),
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}
