import { SearchResponse } from "./dto/search-type";

export default async function PostSearch(
  name: string
): Promise<SearchResponse> {
  const token = "token from localStorage";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/spaces/search?sort=recent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
      }),
    }
  );
  const data = await res.json();

  return data;
}
