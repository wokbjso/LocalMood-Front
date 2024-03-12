import { getSession } from "@common/utils/session/getSession";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const loggedIn = await getSession();
  if (!loggedIn) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return;
}

export const config = {
  matcher: [
    "/record",
    "/record/:path*",
    "/mypage",
    "/curation",
    "/curation/:path*",
  ],
};
