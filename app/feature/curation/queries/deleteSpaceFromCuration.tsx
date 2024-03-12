import { getSession } from "@common/utils/session/getSession";

export default async function DeleteSpaceFromCuration(
  curationId: number,
  spaceId: number
) {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/${curationId}/space/${spaceId}`,
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
