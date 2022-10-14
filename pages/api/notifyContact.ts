// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import requestIp from "request-ip";
import fetch, { FormData } from "node-fetch";

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const ip = requestIp.getClientIp(req);

    let formData = new FormData();
    formData.set("secret", "0x4AAAAAAAA3GNw5-lGodEFn-qma1ONKAiQ");
    formData.set("response", req.body.token);
    formData.set("remoteip", ip!);

    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(url, {
      body: formData,
      method: "POST",
    });

    const verified: any = await result.json();
    if (!verified.success) {
      throw new Error("Failed to verify");
    }

    await fetch(
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

    res.status(200).json({ status: "Message sent succesfully" });
  } catch (error: any) {
    res.status(400).json({ status: "Error sending the message" });
  }
}
