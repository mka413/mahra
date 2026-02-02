// ===== ELEMENTS =====
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("valVideo");
const question = document.getElementById("question");
const finalText = document.getElementById("finalText");

// ===== NAME =====
const HER_NAME = "مهره 🤍";

// ===== FUNNY NO BUTTON TEXTS =====
const noTexts = [
  "لا 🙃",
  "متأكدة؟ 😏",
  "مو هني 😌",
  "حاولي مرة ثانية",
  "لا بس يمكن نعم؟",
  "قريبة… بس لا 😂"
];

// ===== NO BUTTON FLOATS FOREVER =====
noBtn.addEventListener("mouseenter", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.innerText = noTexts[Math.floor(Math.random() * noTexts.length)];
  noBtn.style.left = `${Math.random() * maxX}px`;
  noBtn.style.top = `${Math.random() * maxY}px`;
});

// ===== GENTLE DRIFT EVEN WITHOUT HOVER =====
setInterval(() => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  noBtn.style.transition = "top 3s linear, left 3s linear";
  noBtn.style.left = `${Math.random() * maxX}px`;
  noBtn.style.top = `${Math.random() * maxY}px`;
}, 4000);

// ===== YES BUTTON =====
yesBtn.addEventListener("click", () => {
  // Allow interaction with video container
  videoContainer.style.pointerEvents = "auto";

  // Fade out YES
  yesBtn.classList.add("fade-out");
  setTimeout(() => {
    yesBtn.style.display = "none";
  }, 600);

  // Update text
  question.innerText = `(مالي كله) ${HER_NAME}`;
  videoContainer.style.display = "block";
  finalText.innerText = "والله مالي نتفتي 😌";

  // Play video (sound allowed after click)
  video.muted = false;
  video.play().catch(() => {});

  startHearts();

  // Emotional ending
  setTimeout(() => {
    finalText.innerText = "العوزج شوي 🤍";
  }, 4000);
});

// ===== HEARTS =====
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerText = "💖";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300)
