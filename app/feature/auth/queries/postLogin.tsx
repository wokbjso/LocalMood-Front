import { cookies } from "next/headers";

const EXP_LIMIT = 1000 * 60 * 60 * 24;

export default async function PostLogin(loginFormData: {
  [key: string]: string;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginFormData),
    }
  );

  if (res.ok) {
    const authInfo = await res.json();
    cookies().set(
      "user_info",
      JSON.stringify({
        ...authInfo,
        expTime: new Date().getTime() + EXP_LIMIT,
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: EXP_LIMIT,
        path: "/",
      }
    );
    return new Response("Authorized", {
      status: 200,
    });
  } else {
    return new Response("UnAuthorized", {
      status: 401,
    });
  }
}
