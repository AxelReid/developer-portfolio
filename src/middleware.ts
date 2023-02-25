import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import type { Role } from "./types/next-auth.d";
import { menus } from "@components/Dashboard/Sidebar/menus";

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

  const notAllowed =
    menus.findIndex(
      (m) => m.path === cur && m.permissions.includes(token?.role as Role)
    ) === -1;
  if (notAllowed) return NextResponse.redirect(redirectUrl);

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboardd/:path*"],
};
