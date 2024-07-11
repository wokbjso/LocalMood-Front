import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  console.log("hi");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/${params.id}/related-info`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  // Introduce a 10-second delay before returning the response
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return NextResponse.json(data);
}
