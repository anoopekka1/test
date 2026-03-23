const card = document.querySelector(".card");
let count=0;
let yesSize=1;

/* Auto focus */
document.addEventListener("DOMContentLoaded",()=>{
  const p1=document.getElementById("part1");
  const p2=document.getElementById("part2");

  p1.focus();

  p1.addEventListener("input",()=>{ if(p1.value.length===1) p2.focus(); });
  p2.addEventListener("keydown",(e)=>{ if(e.key==="Backspace" && p2.value==="") p1.focus(); });
});

/* Unlock */
function unlock(){
  const p1=document.getElementById("part1").value;
  const p2=document.getElementById("part2").value;

  if(p1==="8" && p2==="28"){
    startGame();
  } else {
    document.getElementById("error").innerText="Almost there 💭";
  }
}

function startGame(){
  card.innerHTML=`
    <h2 class="text">Tripti 🐾</h2>
    <p class="text">I made something for you 😊</p>
    <button onclick="step2()">Continue ➡️</button>
  `;
}

function step2(){
  count=0;
  card.innerHTML=`
    <h2 class="text">💖 Catch this</h2>
    <button id="heart">💖</button>
  `;
  const heart=document.getElementById("heart");
  heart.onclick=()=>{
    count++;
    if(count>=3) step3();
    heart.style.transform=`translate(${Math.random()*120-60}px,${Math.random()*120-60}px)`;
  };
}

function step3(){
  card.innerHTML=`
    <p class="text">I know things didn’t happen the right way before...</p>
    <p class="text"><b>But maybe timing has its own way of teaching us things 💖</b></p>
    <p class="text">And now, I feel like taking a step forward… with you, Tripti.</p>
    <button onclick="step4()">One more thing… 😏</button>
  `;
}

function step4(){
  document.body.classList.add("dark");
  document.getElementById("bgMusic").play().catch(()=>{});

  card.innerHTML=`
    <h3 class="text">Tripti… 💖</h3>
    <h3 class="text">How about we start with a coffee… and see where it goes? ☕🌸</h3>
    <button id="yesBtn" onclick="dateYes()">YES 💘</button>
    <button onclick="moveNo()" id="noBtn">Not sure 🤔</button>
  `;
}

function moveNo(){
  const noBtn=document.getElementById("noBtn");
  noBtn.style.transform=`translate(${Math.random()*100-50}px,${Math.random()*100-50}px)`;
}

function dateYes(){
  sparkle();
  card.innerHTML=`
    <h2 class="text">💞 Perfect 💞</h2>
    <p class="text">📅 5th April 2026</p>
    <p class="text">🕒 6:00 PM</p>
    <button onclick="confirmDate()">Confirm 💘</button>
  `;
}

function sparkle(){
  confetti({
    particleCount:100,
    spread:160,
    scalar:1.2
  });
}

function confirmDate(){
  sparkle();

  card.innerHTML=`
    <h2 class="text">💞 It’s a Date! 💞</h2>
    <p class="text">📅 5th April 2026</p>
    <p class="text">🕒 6:00 PM</p>
    <p class="text">See you soon Tripti ❤️</p>
    <p class="text">✨ I’ll be waiting… ☕</p>
  `;
}
