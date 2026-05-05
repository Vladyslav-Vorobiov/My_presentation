/* cursor.js — custom cursor with lagging ring */

const cursor = document.getElementById("cursor");
const ring = document.getElementById("cursor-ring");

let cx = 0,
  cy = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  cx = e.clientX;
  cy = e.clientY;
  cursor.style.left = cx + "px";
  cursor.style.top = cy + "px";
});

function animateRing() {
  rx += (cx - rx) * 0.12;
  ry += (cy - ry) * 0.12;
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(animateRing);
}
animateRing();

/* Enlarge cursor on interactive elements */
document
  .querySelectorAll("a, button, .skill-card, .project-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      ring.style.width = "60px";
      ring.style.height = "60px";
      ring.style.opacity = "0.5";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.width = "12px";
      cursor.style.height = "12px";
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.opacity = "1";
    });
  });
