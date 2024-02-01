import { getSession } from "@common/utils/getSession";

export default async function PostModifyImage(image: any[]): Promise<any> {
  const formData = new FormData();
  for (let i = 0; i < image.length; i++) {
    formData.append("file", image[i]);
  }

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
      body: formData,
    }
  );

  const data = await res.json();
  return data;
}
