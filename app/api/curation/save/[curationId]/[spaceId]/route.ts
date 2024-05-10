import { getSession } from "@/common/utils/session/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { curationId: number; spaceId: number } }
) {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/${params.curationId}/space/${params.spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.ok) {
    return NextResponse.json("Success", { status: 200 });
  } else return NextResponse.json("Error", { status: 400 });
}
