import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler({ methods, isPrivate = true, handler }) {
  return async function (req, res) {
    if (req.method && !methods.includes(req.method)) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "Plz log in." });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
