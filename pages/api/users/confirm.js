import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { withIronSessionApiRoute } from "iron-session/next";

async function handler(req, res) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
  });
  if (!exists) res.status(404).end();
  req.session.user = {
    id: exists?.userId,
  };
  await req.session.save();
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "winwinsession",
  password:
    "9845904809485098594385093840598dfasdsadasdasdasdas;ldfksjgdsflgjdfklgjdflgjflkgjdgd",
});
