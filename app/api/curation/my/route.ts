import { getSession } from "@common/utils/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/member`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "force-cache",
      next: { tags: ["getMyCuration"] },
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}
