import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { withIronSessionApiRoute } from "iron-session/next";

async function handler(req, res) {
  console.log(req.session.user);
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("GET", handler), {
  cookieName: "winwinsession",
  password:
    "9845904809485098594385093840598dfasdsadasdasdasdas;ldfksjgdsflgjdfklgjdflgjflkgjdgd",
});
