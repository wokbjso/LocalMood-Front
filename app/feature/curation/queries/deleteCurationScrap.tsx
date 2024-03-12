import { getSession } from "@common/utils/session/getSession";

export default async function DeleteCurationScrap(curationId: number) {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/scraps/curations/${curationId}`,
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
