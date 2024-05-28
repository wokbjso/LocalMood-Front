import ApiErrorMessage from "@/common/utils/error/api-error-message";
import { getSession } from "@/common/utils/session/getSession";
import { CurationProps } from "../type";

export default async function GetRandomCuration(): Promise<
  Omit<CurationProps, "privacy">[]
> {
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

  if (!res.ok) throw new Error(ApiErrorMessage(res.status));

  const data = await res.json();
  return data;
}
