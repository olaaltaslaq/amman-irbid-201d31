'use strict';
let audioEl = document.getElementById('song');
let randomBtn = document.getElementById('random');

let spanEl = document.getElementById('theRandomVolume');

randomBtn.addEventListener('click', randomVolume);

function randomVolume(event) {
    let randomNum = Math.random();//0-1
    audioEl.volume = randomNum;
    spanEl.textContent = randomNum;
}