import { getSession } from "@common/utils/getSession";

interface CurationDataProps {
  title: string;
  keyword: string;
  privacy: boolean;
}

export default async function PostCurationMake(
  dataCurationMake: CurationDataProps
) {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataCurationMake),
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
