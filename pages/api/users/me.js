import { withApiSession } from "../../../libs/server/withSession";
import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { withIronSessionApiRoute } from "iron-session/next";

async function handler(req, res) {
  console.log(req.session.user);
  res.status(200).end();
}

export default withApiSession(withHandler("GET", handler));
