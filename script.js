const card=document.querySelector(".card");let count=0;

document.addEventListener("DOMContentLoaded",()=>{
let p1=document.getElementById("part1");
let p2=document.getElementById("part2");
p1.focus();
p1.oninput=()=>{if(p1.value.length===1)p2.focus()}
p2.onkeydown=(e)=>{if(e.key==="Backspace"&&!p2.value)p1.focus()}
});

function unlock(){
let p1=document.getElementById("part1").value;
let p2=document.getElementById("part2").value;
if(p1==="8"&&p2==="28")startGame();
else document.getElementById("error").innerText="Almost there 💭";
}

function startGame(){
card.innerHTML=`<h2 class="text">Tripti 🐾</h2>
<p class="text" style="font-size:20px;">🐶🐱🐾</p>
<p class="text"><b>You spend your days caring for others… 🐾</b></p>
<p class="text">especially those who can’t speak for themselves 💖</p>
<p class="text">Today, I just wanted to make you smile 😊</p>
<button onclick="step2()">Continue ➡️</button>`;
}

function step2(){
count=0;
let size=1;

card.innerHTML=`<h2 class="text">💖 Catch this</h2>
<button id="heart" style="font-size:30px; position:relative;">💖</button>`;

let heart=document.getElementById("heart");

heart.onclick=()=>{
count++;

size+=0.3;
heart.style.transform=`scale(${size})`;
heart.style.animation="bounce 0.3s";
setTimeout(()=>heart.style.animation="",300);

if(count===2){
showMessage("Come on… you can do it 💖");
}

if(count===3){
giggleBurst();
}

if(count>=4){
setTimeout(step3,300);
}

const x=Math.random()*200-100;
const y=Math.random()*200-100;
heart.style.transform+=` translate(${x}px,${y}px)`;
};
}

function showMessage(text){
const msg=document.createElement("div");
msg.innerText=text;

msg.style.position="fixed";
msg.style.bottom="30px";
msg.style.left="50%";
msg.style.transform="translateX(-50%)";
msg.style.background="#ff4d6d";
msg.style.color="white";
msg.style.padding="10px 20px";
msg.style.borderRadius="20px";
msg.style.fontSize="14px";
msg.style.boxShadow="0 5px 15px rgba(0,0,0,0.2)";
msg.style.opacity="0";
msg.style.transition="0.4s";

document.body.appendChild(msg);

setTimeout(()=>msg.style.opacity="1",50);

setTimeout(()=>{
msg.style.opacity="0";
setTimeout(()=>msg.remove(),400);
},2000);
}

function giggleBurst(){
for(let i=0;i<25;i++){
setTimeout(()=>{
let span=document.createElement("span");
span.innerText="🤭";
span.style.position="fixed";
span.style.left=Math.random()*100+"vw";
span.style.top="100vh";
span.style.fontSize="26px";
span.style.animation="floatSpin 2.5s ease-out forwards";
document.body.appendChild(span);
setTimeout(()=>span.remove(),2500);
},i*80);
}
}

function step3(){
card.innerHTML=`<p class="text">I know things didn’t happen the right way before...</p>
<p class="text"><b>But maybe timing has its own way of teaching us things 💖</b></p>
<p class="text">And now, I feel like taking a step forward… with you, Tripti.</p>
<button onclick="step4()">One more thing… 😏</button>`;
}

function step4(){
document.getElementById("bgMusic").play().catch(()=>{});
card.innerHTML=`<h3 class="text">Tripti… 💖</h3>
<h3 class="text">How about we start with a coffee… and see where it goes? ☕🌸</h3>
<button id="yesBtn" onclick="dateYes()">YES 💘</button>
<button onclick="moveNo()">Not sure 🤔</button>`;
}

function moveNo(){
event.target.style.transform=`translate(${Math.random()*100-50}px,${Math.random()*100-50}px)`;
}

function dateYes(){
confetti({particleCount:150,spread:100});
card.innerHTML=`<h2 class="text">💞 Perfect 💞</h2>
<p class="text">📍 <a href="https://maps.app.goo.gl/QXCoGb34ttunD3zn8" target="_blank">BREWshaalaa ☕</a></p>
<p class="text">📅 5th April 2026</p>
<p class="text">🕒 6:00 PM</p>
<button onclick="confirmDate()">Confirm 💘</button>`;
}

function confirmDate(){
const end=Date.now()+2000;
(function frame(){
confetti({particleCount:4,angle:60,spread:50,origin:{x:0}});
confetti({particleCount:4,angle:120,spread:50,origin:{x:1}});
if(Date.now()<end)requestAnimationFrame(frame);
})();
card.innerHTML=`<h2 class="text">💞 It’s a Date! 💞</h2>
<p class="text">📅 5th April 2026</p>
<p class="text">🕒 6:00 PM</p>
<p class="text">See you soon Tripti ❤️</p>
<p class="text">✨ I’ll be waiting… ☕</p>`;
}
