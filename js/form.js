const form = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const btn = form.querySelector(".form-submit");
  const data = Object.fromEntries(new FormData(form));

  btn.textContent = "Sending...";
  btn.disabled = true;

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
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
