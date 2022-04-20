import { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req, ev) {
  if (!req.url.includes("/api")) {
    if (!req.url.includes("/enter") && !req.cookies.winwinsession) {
      const url = req.nextUrl.clone();
      url.pathname = "/enter";
      return NextResponse.redirect(url);
    }
  }
}
