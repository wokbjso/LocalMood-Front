import { getSession } from "@common/utils/getSession";

export default async function GetPlaceMyPage() {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  if (!token) {
    location.replace("/login");
  } else {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/review/member`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await res.json();

    return data;
  }
}
