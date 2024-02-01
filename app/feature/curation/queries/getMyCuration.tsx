import { getSession } from "@common/utils/getSession";

export default async function getMyCuration() {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/member`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: { tags: ["getMyCuration"] },
    }
  );
  const data = await res.json();

  return data;
}
