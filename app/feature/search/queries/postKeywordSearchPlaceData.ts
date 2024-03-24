import { getSession } from "@common/utils/session/getSession";
import { SearchPlaceResponse } from "./dto/search-type";

export async function postKeywordSearchPlaceData(
  keyword: string
): Promise<SearchPlaceResponse> {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/filter?sort=recent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      next: { tags: ["postKeywordSearchPlaceData"] },
      body: keyword,
    }
  );
  const data = await res.json();

  return data;
}
