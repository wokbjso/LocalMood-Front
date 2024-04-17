import { getSession } from "@common/utils/session/getSession";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const shouldLoginPath = ["/record", "/mypage", "/curation"];
const shouldNotLoginPath = ["/login"];

export async function middleware(request: NextRequest) {
  const auth_info = await getSession();
  if (
    !auth_info?.data?.accessToken &&
    shouldLoginPath.some((path) => request.url.includes(path.split("/")[1]))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    auth_info?.data?.accessToken &&
    shouldNotLoginPath.some((path) => request.url.includes(path.split("/")[1]))
  )
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/record/:path*", "/mypage", "/curation/:path*", "/login/:path*"],
};
