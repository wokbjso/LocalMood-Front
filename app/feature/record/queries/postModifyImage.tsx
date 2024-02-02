import { getSession } from "@common/utils/getSession";

export default async function PostModifyImage(image: any): Promise<any> {
  const formData = new FormData();
  formData.append("file", image); // Append with a unique key
  console.log(formData);

  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/file/uploadFile/temp/2`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  const data = await res.json();
  return data;
}
