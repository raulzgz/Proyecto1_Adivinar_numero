// 1er paso: seleccionar loes elementos del DOM y guardarlos en variables
const scoreField = document.querySelector(".score");
const CheckButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessField = document.querySelector(".guess");
const highscoreField = document.querySelector(".highscore");
const messageField = document.querySelector(".message");
const numberField = document.querySelector(".number");

console.log(
  scoreField,
  CheckButton,
  againButton,
  guessField,
  highscoreField,
  messageField,
  numberField
);
// 2do paso: crear las variables que necesitamos

const score = 20;
const highscore = 0;
const secretNumbre = Math.trunc(Math.random() * 20) + 1;
const number = numberField.value;

// 3er paso: crear las funciones que necesitemos

scoreField.textContent = 10;

CheckButton.addEventListener("click", function () {
  alert("Hola mundo");
});

function alert() {
  alert("Me hiciste click");
}
