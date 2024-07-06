import { getSession } from "@/common/utils/session/get-session";

export default async function GetCurationDetail(curationId: number) {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/${curationId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      next: { tags: ["getCurationDetail"] },
    }
  );
  const data = await res.json();

  return data;
}
