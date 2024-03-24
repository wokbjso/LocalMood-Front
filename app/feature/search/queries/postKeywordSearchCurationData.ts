import { getSession } from "@common/utils/session/getSession";

export async function postKeywordSearchCurationData(keyword: any) {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/filter`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword1: keyword[0],
        keyword2: keyword.length > 1 && keyword[1],
      }),
      cache: "no-store",
      next: { tags: ["postKeywordSearchCurationData"] },
    }
  );
  const data = await res.json();

  return data;
}
