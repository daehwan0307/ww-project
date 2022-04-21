import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const cookieOptions = {
  cookieName: "winwinsession",
  password: process.env.COOKIE_PASSWORD,
};

export function withApiSession(fn) {
  return withIronSessionApiRoute(fn, cookieOptions);
}

export function withSsrSession(handler) {
  return withIronSessionSsr(handler, cookieOptions);
}
