import { NextRequest } from "next/server";
import { PlaceScrappedResponse } from "./dto/place-scrapped";

export default async function GetPlaceScrapped(): Promise<PlaceScrappedResponse> {
  const token = "token from localStorage";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/v1/members/me/scraps/space`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();

  return data;
}
