import { getSession } from "@common/utils/getSession";

export default async function PostUploadFile(files: any): Promise<any> {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/file/uploadFile`,
    {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(files),
    }
  );

  if (res.ok) {
    const madeFile = await res.json();
    return madeFile;
  } else {
    return null;
  }
}
