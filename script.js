const scoreField = document.querySelector('.score')
const CheckButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessField = document.querySelector('.guess')
const highscoreField = document.querySelector('.highscore')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')

console.log(
    scoreField,
    CheckButton,
    againButton,
    guessField,
    highscoreField,
    messageField,
    numberField
)

scoreField.textContent = 10

CheckButton.addEventListener('click', function(){
    alert ('Hola mundo')
})

function alert(){
    alert ('Me hiciste click')
}