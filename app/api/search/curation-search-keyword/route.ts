import { getSession } from "@common/utils/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
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
  console.log(data);

  return NextResponse.json(data);
}
