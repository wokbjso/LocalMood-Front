import { getSession } from "@common/utils/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_SERVER_API
    }/api/v1/auth/kakao?code=${searchParams.get("code")}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  console.log(data);

  return NextResponse.json(data);
}
