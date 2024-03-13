import { getSession } from "@common/utils/session/getSession";
import revalidateMyCuration from "@feature/curation/actions/revalidateMyCuration";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const body = await request.json();
  const curationId = Number(body);
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/${curationId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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
