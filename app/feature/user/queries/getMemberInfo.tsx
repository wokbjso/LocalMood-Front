import ApiErrorMessage from "@/common/utils/error/api-error-message";
import { getSession } from "@/common/utils/session/get-session";

export default async function GetMemberInfo(): Promise<{
  nickname: string;
  profileImgUrl: string;
}> {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/members/me`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) throw new Error(ApiErrorMessage(res.status));

  const data = await res.json();
  return data;
}
