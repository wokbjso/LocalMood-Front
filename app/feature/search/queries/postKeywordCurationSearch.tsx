import { getSession } from "@common/utils/getSession";
import { SearchCurationResponse, SearchPlaceResponse } from "./dto/search-type";

export default async function PostKeywordCurationSearch(
  keyword: string[]
): Promise<SearchCurationResponse> {
  const userInfo = await getSession();
  const token = userInfo?.accessToken;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/curation/filter`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword1: keyword[0],
        keyword2: keyword.length === 2 ? keyword[1] : "ALL",
      }),
    }
  );
  const data = await res.json();

  return data;
}
