import { getSession } from "@common/utils/session/getSession";

export default async function getScrappedCuration() {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/members/me/scraps/curation`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "force-cache",
      next: { tags: ["getScrapedCuration"] },
    }
  );
  const data = await res.json();

  return data;
}
