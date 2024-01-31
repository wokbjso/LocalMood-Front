import { getSession } from "@common/utils/getSession";

export default async function GetMemberInfo() {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  console.log(token);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/members/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();

  return data;
}
