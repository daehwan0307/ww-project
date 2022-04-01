import { withApiSession } from "../../../libs/server/withSession";
import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";

async function handler(req, res) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  res.json({
    ok: true,
    profile,
  });
}

export default withApiSession(
  withHandler({
    method: "GET",
    handler,
  })
);
