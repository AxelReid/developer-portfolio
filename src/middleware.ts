import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { Role } from "./types/next-auth.d";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const prev =
    req.headers
      .get("referer")
      ?.replace(process.env.NEXTAUTH_URL as string, "") || "/";
  const cur = req.nextUrl.pathname;
  const dest = prev !== cur ? prev : "/";

  const redirectUrl = new URL(dest, req.url);

  if (!token?.email) {
    redirectUrl.searchParams.set("authTo", cur);
    return NextResponse.redirect(redirectUrl);
  }

  if (token?.role === Role.ADMIN) {
    if (usersOnly.includes(cur)) return NextResponse.redirect(redirectUrl);
    return NextResponse.next();
  }
  if (adminsOnly.includes(cur)) return NextResponse.redirect(redirectUrl);

  return NextResponse.next();
}

const adminsOnly = [
  "/dashboard/manage-reviews",
  "/dashboard/manage-users",
  "/dashboard/manage-projects",
];
const usersOnly = ["/dashboard/give-a-feedback"];
export const config = {
  matcher: ["/dashboard/:path*"],
};
