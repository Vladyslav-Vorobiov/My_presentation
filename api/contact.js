const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message, website } = req.body || {};

  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  if (
    name.length > 100 ||
    email.length > 200 ||
    subject.length > 200 ||
    message.length > 3000
  ) {
    return res.status(400).json({ error: "Field too long" });
  }

  const text =
    `<b>Query from my website</b>\n` +
    `<b>From:</b> ${escapeHtml(name)}\n` +
    `<b>Email:</b> ${escapeHtml(email)}\n` +
    `<b>Subject:</b> ${escapeHtml(subject)}\n` +
    `<b>Message:</b> ${escapeHtml(message)}`;

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          parse_mode: "HTML",
          text,
        }),
      },
    );

    if (!tgRes.ok) throw new Error("Telegram error");
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(502).json({ error: "Failed to send" });
  }
};
