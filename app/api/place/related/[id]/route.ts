import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/${params.id}/related-info`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  
  const data = await res.json();
  return NextResponse.json(data);
}
