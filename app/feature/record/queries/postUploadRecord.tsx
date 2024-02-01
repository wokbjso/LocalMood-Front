import { getSession } from "@common/utils/getSession";

export default async function PostUploadRecord(
  spaceId: number,
  uploadData: any
): Promise<any> {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/review/${spaceId}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (res.ok) {
    return new Response("Authorized", {
      status: 200,
    });
  } else {
    return new Response("Error Occured", {
      status: 400,
    });
  }
}
