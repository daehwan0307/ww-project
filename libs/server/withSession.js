import { withIronSessionApiRoute } from "iron-session/next";

const cookieOptions = {
  cookieName: "carrotsession",
  password: process.env.COOKIE_PASSWORD,
};

export function withApiSession(fn) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
