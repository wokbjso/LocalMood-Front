import { getSession } from "@common/utils/getSession";

export default async function PostUploadRecord(
  spaceId: number,
  uploadData: any
): Promise<any> {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/review/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        purpose: uploadData.purpose,
        mood: uploadData.mood,
        music: uploadData.music,
        interior: uploadData.interior,
        positiveEval: uploadData.positiveEval.join(","),
        negativeEval: uploadData.negativeEval.join(","),
      }),
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
