import { getSession } from "@common/utils/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_SERVER_API
    }/api/v1/curation/search?title=${searchParams.get("search_query")}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}
