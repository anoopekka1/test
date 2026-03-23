const card = document.querySelector(".card");
let count = 0;
let yesSize = 1;

function startGame() {
  card.innerHTML = `
    <h2>Tripti 🐾</h2>
    <p>You spend your days caring for others...</p>
    <p>Today, I just wanted to make you smile 😊</p>
    <button onclick="step2()">Continue ➡️</button>
  `;
}

function step2() {
  count = 0;
  card.innerHTML = `
    <h2>💖 Catch this</h2>
    <button id="heart">💖</button>
  `;

  const heart = document.getElementById("heart");
  heart.onclick = () => {
    count++;
    if (count >= 3) step3();
    heart.style.transform = `translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
  };
}

function step3() {
  card.innerHTML = `
    <p>I know things didn’t happen the right way before...</p>
    <p><b>But maybe timing has its own way of teaching us things 💖</b></p>
    <p>And now, I feel like taking a step forward… with you, Tripti.</p>
    <button onclick="step4()">One more thing… 😏</button>
  `;
}

function step4() {
  document.body.classList.add("dark");
  document.getElementById("bgMusic").play();

  card.innerHTML = `
    <h3 class="fadeText">Tripti… 💖</h3>
    <h3 class="fadeText delay1">
      How about we start with a coffee… and see where it goes? ☕🌸
    </h3>

    <div class="delay2">
      <button id="yesBtn" onclick="dateYes()">YES 💘</button>
      <button id="noBtn" onmouseover="moveNo()" onclick="noClick()">Not sure 🤔</button>
    </div>
  `;
}

function moveNo() {
  const noBtn = document.getElementById("noBtn");
  noBtn.style.transform = `translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
}

function noClick() {
  yesSize += 0.3;
  document.getElementById("yesBtn").style.transform = `scale(${yesSize})`;
}

function dateYes() {
  confetti({particleCount:200, spread:100});
  card.innerHTML = `
    <h2>💞 Perfect 💞</h2>
    <p>📍 <a href="https://maps.app.goo.gl/HLtzpuWb9SjTryQJ8" target="_blank">Location</a></p>
    <p>📅 5th April 2026</p>
    <input type="time" id="timeInput" />
    <button onclick="confirmDate()">Confirm 💘</button>
  `;
}

function confirmDate() {
  const time = document.getElementById("timeInput").value || "";
  card.innerHTML = `
    <h2>💞 It’s a Date! 💞</h2>
    <p>📅 5th April 2026</p>
    <p>🕒 ${time}</p>
    <p>See you soon Tripti ❤️</p>
  `;
}
