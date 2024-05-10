import { getSession } from "@/common/utils/session/getSession";
import revalidateCurationRandom from "@/feature/curation/actions/revalidateCurationRandom";
import revalidateCurationScrap from "@/feature/curation/actions/revalidateCurationScrap";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/scraps/curations/${Number(
      params.id
    )}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.ok) {
    revalidateCurationScrap();
    revalidateCurationRandom();
    return new NextResponse("Success", {
      status: 200,
    });
  } else {
    return new NextResponse("Error", {
      status: 400,
    });
  }
}
