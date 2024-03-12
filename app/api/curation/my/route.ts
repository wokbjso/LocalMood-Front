import { getSession } from "@common/utils/session/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
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
