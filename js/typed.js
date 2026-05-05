/* typed.js — typewriter cycling phrases */

const phrases = [
  "fast React applications.",
  "multilingual Next.js sites.",
  "scalable dashboards.",
  "clean, maintainable UI.",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedEl = document.getElementById("typed-text");

function type() {
  const phrase = phrases[phraseIndex];

  if (!isDeleting) {
    typedEl.textContent = phrase.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === phrase.length) {
      isDeleting = true;
      setTimeout(type, 2000);
      return;
    }
  } else {
    typedEl.textContent = phrase.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, isDeleting ? 40 : 70);
}

type();
