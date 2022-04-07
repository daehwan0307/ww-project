import { withApiSession } from "../../../../libs/server/withSession";
import client from "../../../../libs/server/client";
import withHandler from "../../../../libs/server/withHandler";

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
    methods: ["GET"],
    handler,
  })
);
