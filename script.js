const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const nameInput = document.getElementById("nameInput");
const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

let isPlaying = false;
musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicBtn.innerText = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.innerText = "🎵 Play Music";
  }
  isPlaying = !isPlaying;
});

yesBtn.addEventListener("click", () => {
  const name = nameInput.value || "My Love 💖";

  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

  document.querySelector(".card").innerHTML = `
    <h2>💖 Yayyy ${name}! 💖</h2>
    <p>You are all I ever wanted and I’m so glad you are mine.</p>
    <p>Wishing the sweetest, happiest day to my forever Valentine!</p>
    <p>Happy Valentine’s 💘</p>
    <button onclick="shareWhatsApp()">📲 Share on WhatsApp</button>
  `;
});

function shareWhatsApp() {
  const text = encodeURIComponent("I just said YES 💖✨");
  window.open(`https://wa.me/?text=${text}`, "_blank");
}
