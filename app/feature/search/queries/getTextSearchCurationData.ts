import { getSession } from "@common/utils/session/getSession";

export async function getTextSearchCurationData(title: string) {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/search?title=${title}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      next: { tags: ["getTextSearchCurationData"] },
    }
  );
  const data = await res.json();

  return data;
}
