import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/server/client";
import withHandler from "../../../libs/server/withHandler";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(401).end();
  }
  console.log(req.body);
  res.status(200).end();
}
