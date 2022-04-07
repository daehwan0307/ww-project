import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "../../../../libs/server/withSession";
import client from "../../../../libs/server/client";
import withHandler from "../../../../libs/server/withHandler";

async function handler(req, res) {
  const {
    session: { user },
  } = req;
  const favs = await client.fav.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      product: {
        include: {
          _count: {
            select: {
              favs: true,
            },
          },
        },
      },
    },
  });
  res.json({
    ok: true,
    favs,
  });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);
