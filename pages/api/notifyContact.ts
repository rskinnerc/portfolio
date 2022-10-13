// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const telegramRes = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        parse_mode: "HTML",
        text: `<b>${req.body.name}</b> &lt;${req.body.email}&gt; contacted you through your portfolio form saying: <pre> <b>${req.body.message}</b> </pre>`,
      }),
    }
  );

  if (telegramRes.ok) {
    res.status(200).json({ status: "Message sent succesfully" });
  } else {
    res.status(telegramRes.status).json({ status: "Error sending the message" });
  }
}
