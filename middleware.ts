import { getToken } from "next-auth/jwt";
import { NextResponse, type NextRequest } from "next/server";

const withAuth = (req: NextRequest, accessToken: boolean) => {
  const url = req.nextUrl.clone();
  if (!accessToken) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
};

const withAuthList = [
  "/record",
  "/record/*",
  "/mypage",
  "/curation",
  "/curation/*",
];
const withOutAuthList = ["/login"];

const withOutAuth = (req: NextRequest, accessToken: boolean) => {
  const url = req.nextUrl.clone();
  if (accessToken) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
};

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;
  const isWithAuth = withAuthList.includes(pathname);
  const isWithOutAuth = withOutAuthList.includes(pathname);

  if (isWithAuth) return withAuth(req, !!token);
  else if (isWithOutAuth) return withOutAuth(req, !!token);
}

export const config = {
  matcher: [...withAuthList, ...withOutAuthList],
};
