const starsEl = document.getElementById('stars');

for (let i = 0; i < 80; i++) {
  const star = document.createElement('div');
  star.className = 'star';

  const size = Math.random() * 2.5 + 0.5;

  star.style.cssText = `
    width:${size}px;
    height:${size}px;
    top:${Math.random()*100}%;
    left:${Math.random()*100}%;
    animation-delay:${Math.random()*3}s;
    animation-duration:${1.5 + Math.random()*2}s;
  `;

  starsEl.appendChild(star);
}

const hearts = ['❤️','💕','💗','💖','🌹','✨'];
const fhEl = document.getElementById('fhearts');

function spawnHeart(){
  const h = document.createElement('div');
  h.className = 'fheart';

  h.textContent =
    hearts[Math.floor(Math.random()*hearts.length)];

  h.style.cssText = `
    left:${Math.random()*90+5}%;
    bottom:0;
    font-size:${14+Math.random()*16}px;
    animation-delay:${Math.random()*2}s;
    animation-duration:${3+Math.random()*3}s;
  `;

  fhEl.appendChild(h);

  setTimeout(() => h.remove(), 6000);
}

setInterval(spawnHeart,700);

let playing = false;
const audio = document.getElementById('loveAudio');
audio.volume = 0.5;

function toggleMusic(){
  const btn = document.getElementById('musicBtn');
  const label = document.getElementById('musicLabel');
  const note = document.getElementById('noteIcon');

  if(!playing){
    audio.play();
    playing = true;
    btn.classList.add('playing');
    label.textContent = 'หยุดเพลง';
    note.textContent = '🎶';
  }else{
    audio.pause();
    playing = false;
    btn.classList.remove('playing');
    label.textContent = 'เปิดเพลงรัก';
    note.textContent = '🎵';
  }
}

let noPresses = 0;

const noMessages = [
  'ไม่',
  'ไม่',
  'ไม่',
  'ไม่',
  'ไม่ปฎิเสธ'
];

function moveNo(){
  noPresses++;

  const btn = document.getElementById('noBtn');
  const card = document.querySelector('.card');

  const maxX =
    card.offsetWidth - btn.offsetWidth - 20;

  const rx =
    (Math.random()-0.5)*maxX*0.8;

  const ry =
    (Math.random()-0.5)*60;

  btn.style.transform =
    `translate(${rx}px, ${ry}px)`;

  if(noPresses < noMessages.length){
    btn.textContent = noMessages[noPresses];
  }

  if(noPresses >= 4){
    btn.style.opacity = '0.3';
    btn.style.pointerEvents = 'none';
  }
}

function sayYes(){
  document.getElementById('btnGroup').style.display = 'none';
  document.getElementById('musicBtn').style.display = 'none';
  document.getElementById('successMsg').style.display = 'flex';

  for(let i=0;i<20;i++) spawnHeart();

  if(!playing){
    audio.play();
    playing = true;
  }
}

