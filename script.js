// 1er paso: seleccionar loes elementos del DOM y guardarlos en variables
const scoreField = document.querySelector(".score");
const CheckButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
const guessField = document.querySelector(".guess");
const highscoreField = document.querySelector(".highscore");
const messageField = document.querySelector(".message");
const numberField = document.querySelector(".number");
const bodyField = document.querySelector("body");

// 2do paso: crear las variables que necesitamos

let score = 20;
let highscore = 0;

// obtener un numero aleatorio entre 1 y 20
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;

const number = numberField.value;

console.log(`El numero ingresado es ${secretNumber}`);
console.log(`El numero ingresado es ${number}`);

// 3er paso: añadir un listener al checkButton y mostrar un mensaje que
// diga si el numero es mayor o menos en el campo messageField

function mostrarMensaje(mensaje) {
  messageField.textContent = mensaje;
}

// codigo refactorizado
CheckButton.addEventListener("click", function () {
  const number = Number(guessField.value);

  if (number === secretNumber) {
    mostrarMensaje("Ganaste");
    if (score > highscore) highscore = highscoreField.textContent = score;
    /* sin refactorizar
            if (score > highscore) {
            highscore = score;
            highscoreField.textContent = score;
            }
            */
    //cambiar el color del fondo del body o lo que corresponda, mostrar el numero secreto en vez de ?
    bodyField.style.backgroundColor = "#60b347";
    numberField.textContent = secretNumber;
  } else if (score === 1) {
    mostrarMensaje("Perdiste");
    bodyField.style.backgroundColor = "red";
  } else {
    messageField.textContent =
      number > secretNumber ? "El numero es menor" : "El numero es mayor";
    score--;
    scoreField.textContent = score;
  }
});

/* Codigo original sin refactorizar (le faltan acciones que añadimos despues)
CheckButton.addEventListener("click", function () {
  const number = guessField.value;
  console.log(`El numero ingresado es ${number}`);
  if (number < secretNumber) {
    messageField.textContent = "El numero es mayor";
    score = score - 1;
    scoreField.textContent = score;
  } else if (number > secretNumber) {
    messageField.textContent = "El numero es menor";
    score--;
    scoreField.textContent = score;
  } else {
    messageField.textContent = "Ganaste";
  }
});
*/
