import { getSession } from "@common/utils/session/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const spaceId = body.spaceId;
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/review/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    }
  );

  if (res.ok) {
    return new NextResponse("Success", {
      status: 200,
    });
  } else {
    return new NextResponse("Error", {
      status: 400,
    });
  }
}
