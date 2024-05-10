import { getSession } from "@/common/utils/session/getSession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const formData = await request.formData();
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/review/${Number(params.id)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
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
