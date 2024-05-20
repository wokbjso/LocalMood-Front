import ErrorMessage from "@/common/utils/error/error-message";
import { getSession } from "@/common/utils/session/getSession";

export default async function GetRandomCuration() {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/recommend`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      next: { tags: ["getRandomCuration"] },
    }
  );

  if (!res.ok) throw new Error(ErrorMessage(res.status));

  const data = await res.json();
  return data;
}
