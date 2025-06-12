console.log('JS Loaded');

const scoreShower = document.querySelector('.score');
const icon = document.querySelector('.icon')

const currentdifficultyshower = document.querySelector('.currentdifficulty')
const easybutton = document.querySelector('.easy')
const normalbutton = document.querySelector('.normal')
const hardbutton = document.querySelector('.hard')
const startButton = document.querySelector('.startButton');
const currentButton = document.querySelector('.currentWeapon');
const changeButton = document.querySelector('.changeWeapon');

const holes = [
  document.querySelector('.hole1'),
  document.querySelector('.hole2'),
  document.querySelector('.hole3'),
  document.querySelector('.hole4'),
  document.querySelector('.hole5'),
  document.querySelector('.hole6'),
  document.querySelector('.hole7'),
  document.querySelector('.hole8'),
  document.querySelector('.hole9'),
  document.querySelector('.hole10'),
  document.querySelector('.hole11'),
  document.querySelector('.hole12')
];

let currentdifficulty = 'normal'
let moleInterval;
let gameRunning = false;
let rotation = 0;
let scoreNumber = 0;

startButton.addEventListener('click', function(){
  if (!gameRunning) {
    startgame();
    startTimer();
  }
});

changeButton.addEventListener('click', function(){
  if (rotation == 0) {
    document.querySelector('.hammer').src = 'imgs/weapons/longsword.png';
    document.querySelector('.whack').src = 'audio/Swing.mp3';
    currentButton.innerHTML = 'Long Sword';
    rotation++;
  } else if (rotation == 1) {
    document.querySelector('.hammer').src = 'imgs/weapons/RealKnife.png';
    document.querySelector('.whack').src = 'audio/Slash.mp3';
    currentButton.innerHTML = 'Real Knife';
    rotation++;
  } else if (rotation == 2) {
    document.querySelector('.hammer').src = 'imgs/weapons/diamondsword.png';
    document.querySelector('.whack').src = 'audio/Slash.mp3';
    currentButton.innerHTML = 'Diamond Sword';
    rotation++;
  } else if (rotation == 3) {
    document.querySelector('.hammer').src = 'imgs/weapons/hammer.png';
    document.querySelector('.whack').src = 'audio/Bonk.mp3';
    currentButton.innerHTML = 'Hammer';
    rotation -= 3;
  }
});

easybutton.addEventListener('click', function(){
  currentdifficulty = 'easy'
  currentdifficultyshower.innerHTML = `<div class='easycolor'>Easy</div>`
  document.querySelector('.icon').src = 'imgs/icons/easy.png';
})

normalbutton.addEventListener('click', function(){
  currentdifficulty = 'normal'
  currentdifficultyshower.innerHTML = `<div class='normalcolor'>Normal</div>`
  document.querySelector('.icon').src = 'imgs/icons/normal.png';
})

hardbutton.addEventListener('click', function(){
  currentdifficulty = 'hard'
  currentdifficultyshower.innerHTML = `<div class='hardcolor'>Hard</div>`
  document.querySelector('.icon').src = 'imgs/icons/hard.png';
})

function startgame() {
  gameRunning = true;
  moleInterval = setInterval(() => {
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
    const randomHole = holes[randomHoleIndex];
    const moleImg = randomHole.querySelector('.mole');

    moleImg.src = 'imgs/mole.png';

    if (currentdifficulty == 'hard'){
      setTimeout(() => {
      moleImg.src = 'imgs/nothing.png';
    }, 500 + Math.random() * 500);
  } else if (currentdifficulty == 'easy'){
    setTimeout(() => {
      moleImg.src = 'imgs/nothing.png';
    }, 4000 + Math.random() * 2000);
  } else {
    setTimeout(() => {
      moleImg.src = 'imgs/nothing.png';
    }, 1500 + Math.random() * 500);
  }
  }, 1000 + Math.random() * 500);
}

holes.forEach((hole) => {
  const moleImg = hole.querySelector('.mole');
  moleImg.addEventListener('click', function () {
    if (moleImg.src.indexOf('mole.png') !== -1) { 
      moleImg.src = 'imgs/nothing.png';
      if (currentdifficulty == 'hard'){
        document.querySelector('.icon').src = 'imgs/icons/hardhit.png';
        setTimeout(() => {
          document.querySelector('.icon').src = 'imgs/icons/hard.png';
        }, 700);
      } else if (currentdifficulty == 'easy'){
        document.querySelector('.icon').src = 'imgs/icons/easyhit.png';
        setTimeout(() => {
          document.querySelector('.icon').src = 'imgs/icons/easy.png';
        }, 700);
      } else {
        document.querySelector('.icon').src = 'imgs/icons/normalhit.png';
        setTimeout(() => {
          document.querySelector('.icon').src = 'imgs/icons/normal.png';
        }, 700);
      }

      scoreNumber++;
      scoreShower.innerHTML = 'Score: ' + scoreNumber;
    }
  });
});

function startTimer() {
  startButton.textContent = "1:00"; 
  let timeRemaining = 60; 
  const timerInterval = setInterval(function () {
    timeRemaining--;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    startButton.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      startButton.textContent = "Start the HUNT.";
      clearInterval(moleInterval);
      gameRunning = false; 
      holes.forEach((hole) => {
        const moleImg = hole.querySelector('.mole');
        moleImg.removeEventListener('click', function () {});
      });
    }
  }, 1000); 
}

// Hammer Code
const cursor = document.querySelector(".hammer");
const soundPlayer = document.querySelector('.whack');

function followCursor(e) {
  cursor.style.top = e.clientY + window.scrollY + "px";
  cursor.style.left = e.clientX + "px";
}

function snap() {
  cursor.classList.add("snap");
  soundPlayer.play();

  setTimeout(() => {
    cursor.classList.remove("snap");
    soundPlayer.currentTime = 0;
  }, 100);
}

window.addEventListener("mousemove", followCursor);
window.addEventListener("click", snap);