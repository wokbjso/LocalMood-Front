import { getSession } from "@common/utils/session/getSession";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";
const host =
  process?.env.NODE_ENV === "development"
    ? "localhost:3000"
    : "localmood.co.kr";

const shouldLoginPath = [
  `${protocol}://${host}/record`,
  `${protocol}://${host}/record/:path*`,
  `${protocol}://${host}/mypage`,
  `${protocol}://${host}/curation`,
  `${protocol}://${host}/curation/:path*`,
];
const shouldNotLoginPath = ["/login", "/login/:path*"];

export async function middleware(request: NextRequest) {
  const auth_info = await getSession();
  if (
    !auth_info?.data?.accessToken &&
    shouldLoginPath.some((path) => request.url === path)
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    auth_info?.data?.accessToken &&
    shouldNotLoginPath.some((path) => request.url === path)
  )
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [...shouldLoginPath, ...shouldNotLoginPath],
};
