import { getSession } from "@common/utils/session/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_SERVER_API
    }/api/v1/curation/search?title=${searchParams.get("search_query")}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}
