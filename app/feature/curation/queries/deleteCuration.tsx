import { getSession } from "@common/utils/getSession";

export default async function DeleteCuration(curationId: number) {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/${curationId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.ok) {
    return new Response("Success", {
      status: 200,
    });
  } else {
    return new Response("Error", {
      status: 400,
    });
  }
}
