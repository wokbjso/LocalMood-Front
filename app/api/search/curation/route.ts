import { NextRequest } from "next/server";

export default async function GET(request: NextRequest) {
  const query = `?${request.nextUrl.searchParams.get("search_query")}`;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/curation` + query,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
