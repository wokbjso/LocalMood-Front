import { getSession } from "@common/utils/session/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/${params.id}/privacy`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-cache",
      next: { tags: ["getPrivacyToggle"] },
    }
  );
  if (res.ok) {
    return NextResponse.json("Success", { status: 200 });
  }
  return NextResponse.json("Error", { status: 400 });
}
