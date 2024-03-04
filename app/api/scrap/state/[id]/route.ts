import { getSession } from "@common/utils/getSession";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/scraps/${params.id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["getScrapStateById"] },
      cache: "force-cache",
    }
  );
  const data = await res.json();

  return NextResponse.json(data);
}
