import { getSession } from "@/common/utils/session/get-session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/auth/logout`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (res.ok) {
    cookies().delete("auth_session");
    return NextResponse.json({ success: "Logout Successful" }, { status: 200 });
  }
  return NextResponse.json({ error: "Logout Failed" }, { status: 400 });
}
