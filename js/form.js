const TOKEN = "6080999895:AAF5qu0ysaR5QnBg14yNYDR6KOPsmVGXRWA";
const CHAT_ID = "-1001918599318";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = form.querySelector(".form-submit");
  const formData = new FormData(form);

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  let queryMessage = `<b>Query from my website</b>\n`;
  queryMessage += `<b>From:</b> ${name}\n`;
  queryMessage += `<b>Email:</b> ${email}\n`;
  queryMessage += `<b>Subject:</b> ${subject}\n`;
  queryMessage += `<b>Message:</b> ${message}\n`;

  btn.textContent = "Sending...";
  btn.disabled = true;

  try {
    const response = await fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: queryMessage,
      }),
    });

    if (response.ok) {
      btn.textContent = "Sent ✓";
      successMsg.style.display = "block";
      form.reset();
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    console.error("Error:", error);
    btn.textContent = "Error ✗";
  } finally {
    setTimeout(() => {
      btn.textContent = "Send Message →";
      btn.disabled = false;
      successMsg.style.display = "none";
    }, 4000);
  }
});
