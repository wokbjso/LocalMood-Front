import { getSession } from "@common/utils/session/getSession";
import { NextRequest, NextResponse } from "next/server";
import { SearchPlaceResponse } from "./dto/search-type";

export async function getTextSearchPlaceData(
  name: string
): Promise<SearchPlaceResponse> {
  const auth_info = await getSession();
  const token = auth_info?.data?.accessToken;
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
      cache: "no-store",
      next: { tags: [`getTextSearchPlaceData`] },
    }
  );
  const data = await res.json();

  return data;
}
