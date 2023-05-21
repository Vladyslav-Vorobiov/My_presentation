const burgerBtnEl = document.querySelector(".burger");
const sidebarEl = document.querySelector(".sidebar");

burgerBtnEl.addEventListener("click", function () {
  this.classList.toggle("active");
  sidebarEl.classList.toggle("sidebar-open");
});
