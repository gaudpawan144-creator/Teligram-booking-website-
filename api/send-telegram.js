export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message } = req.body;

    const TELEGRAM_BOT_TOKEN = "8428236039:AAF3NnPb45eiYIsE4cSgQqyHPuKyirxtt3g";
    // Add multiple chat IDs here
    const CHAT_IDS = ["6426997934", "6622553822", "1866269388"];

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    for (let CHAT_ID of CHAT_IDS) {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "Markdown"
        })
      });
    }

    res.status(200).json({ ok: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
