const TOKEN = "6080999895:AAF5qu0ysaR5QnBg14yNYDR6KOPsmVGXRWA";
const CHAT_ID = "-1001918599318";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const formEl = document.getElementById("form");
formEl.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();

  let queryMessage = `<b>Query from my website</b>\n`;
  queryMessage += `<b>From:</b> ${this.name.value}\n`;
  queryMessage += `<b>Email:</b> ${this.email.value}\n`;
  queryMessage += `<b>Subject:</b> ${this.subject.value}\n`;
  queryMessage += `<b>Message:</b> ${this.message.value}\n`;

  const createInfoMsg = () => {
    const successSentMsgEl = document.createElement("p");
    successSentMsgEl.innerHTML = "Your message has been successfully sent.";
    successSentMsgEl.classList = "success-message";
    formEl.appendChild(successSentMsgEl);
  };

  const removeInfoMsg = () =>
    setTimeout(() => {
      formEl.removeChild(formEl.lastChild);
    }, 8000);

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: queryMessage,
    })
    .then((res) => {
      this.name.value = "";
      this.email.value = "";
      this.subject.value = "";
      this.message.value = "";
      createInfoMsg();
      removeInfoMsg();
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      clearTimeout(removeInfoMsg);
    });
}

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      loop: true,
      slidesPerView: 1, // 1 item per slide on mobile
      spaceBetween: 16,
      allowTouchMove: true,
    },
    768: {
      loop: true,
      slidesPerView: 3, // 3 items per slide on tablet
      spaceBetween: 24,
      allowTouchMove: true,
      watchOverflow: true,
      autoHeight: false,
      slidesPerGroup: 3,
    },
    1200: {
      loop: true,
      slidesPerView: 5, // 5 items per slide on desktop
      spaceBetween: 24,
      allowTouchMove: false,
      watchOverflow: true,
      autoHeight: false,
      slidesPerGroup: 5,
    },
  },
});
