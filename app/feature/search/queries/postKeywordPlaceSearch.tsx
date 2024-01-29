import { getSession } from "@common/utils/getSession";
import { SearchPlaceResponse } from "./dto/search-type";

export default async function PostKeywordPlaceSearch(
  keyword: any
): Promise<SearchPlaceResponse> {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/filter?sort=recent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(keyword),
    }
  );
  const data = await res.json();

  return data;
}
