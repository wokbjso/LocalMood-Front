import { getSession } from "@common/utils/session/getSession";
import { cookies } from "next/headers";

export default async function PostLogout() {
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
  cookies().delete("user_info");
  if (res.ok) {
    return new Response("Logout Success", {
      status: 200,
    });
  } else
    return new Response("Logout Failed", {
      status: 400,
    });
}
