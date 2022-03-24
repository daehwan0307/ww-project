import client from "../../libs/client";

export default async function handler(req, res) {
  await client.user.create({
    data: {
      email: "hi",
      name: "hi",
    },
  });
  res.json({
    ok: true,
  });
}
