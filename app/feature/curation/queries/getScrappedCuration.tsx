import { getSession } from "@common/utils/getSession";

export default async function getScrappedCuration() {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/members/me/scraps/curation`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["getScrapedCuration"] },
    }
  );
  const data = await res.json();

  return data;
}
