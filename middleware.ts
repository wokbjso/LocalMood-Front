import { getSession } from "@common/utils/session/getSession";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const shouldLoginPath = [
  "/record",
  "/record/:path*",
  "/mypage",
  "/curation",
  "/curation/:path*",
];

const shouldNotLoginPath = ["/login", "/login/:path*"];

export async function middleware(request: NextRequest) {
  const auth_info = await getSession();
  if (
    !auth_info?.data?.accessToken &&
    shouldLoginPath.some((path) => request.url.includes(path))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    auth_info?.data?.accessToken &&
    shouldNotLoginPath.some((path) => request.url.includes(path))
  )
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [...shouldLoginPath, ...shouldNotLoginPath],
};
