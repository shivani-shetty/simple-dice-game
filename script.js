'use strict';

let playerNum = 0;

function changePlayer() {
  if (playerNum) {
    playerNum = 0;
  } else playerNum = 1;
}

function resetEverything() {
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`.player--${playerNum}`).style.backgroundColor = '#';
}

document.querySelector('.btn--roll').addEventListener('click', function () {
  let roll = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.dice').src = `dice-${roll}.png`;
  let current = parseInt(
    document.querySelector(`#current--${playerNum}`).textContent
  );
  current += roll;
  if (roll == 1) {
    document.querySelector(`#current--${playerNum}`).textContent = 0;
    changePlayer();
  } else {
    document.querySelector(`#current--${playerNum}`).textContent = current;
  }
  return;
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  let score = parseInt(
    document.querySelector(`#score--${playerNum}`).textContent
  );
  let current = parseInt(
    document.querySelector(`#current--${playerNum}`).textContent
  );
  score += current;
  document.querySelector(`#score--${playerNum}`).textContent = score;
  if (score >= 100) {
    document.querySelector(`.player--${playerNum}`).style.backgroundColor =
      '#60b347';
    resetEverything();
  }
  document.querySelector(`#current--${playerNum}`).textContent = 0;
  changePlayer();
  return;
});
