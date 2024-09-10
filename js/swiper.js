const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    breakpoints: {
      768: {
        delay: 7000,
        disableOnInteraction: true,
      },
      1200: {
        delay: 7000,
        disableOnInteraction: true,
      },
    },
  },
  breakpoints: {
    300: {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 16,
      allowTouchMove: true,
    },
    768: {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 24,
      allowTouchMove: true,
      watchOverflow: true,
      autoHeight: false,
      slidesPerGroup: 3,
    },
    1200: {
      loop: true,
      slidesPerView: 5,
      spaceBetween: 24,
      allowTouchMove: false,
      watchOverflow: true,
      autoHeight: false,
      slidesPerGroup: 5,
    },
  },
});
