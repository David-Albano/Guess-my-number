'use strict';

/* document.querySelector('.message')
// console.log(document.querySelector('.message').textContent) // testContent

document.querySelector('.message').textContent = "🎉 Correct Number "

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10


document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)
*/

const number = document.querySelector('.number')
const message = document.querySelector('.message')
const score = document.querySelector('.score')
const highScore = document.querySelector('.highscore')
let my_highscore = 0

let secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber)

document.querySelector('.again').addEventListener('click', function() {
    message.textContent = "Start guessing..."
    score.textContent = 20
    number.textContent = '?'
    number.style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = ''
    secretNumber = Math.trunc(Math.random() * 20) + 1
    console.log(secretNumber)
})

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    if(!guess) {
        message.textContent = '⛔ No number!'

    }else if (guess === secretNumber) {
        message.textContent = "🎉 Correct Number!"
        
        if(Number(score.textContent) > my_highscore) {
            highScore.textContent = my_highscore = Number(score.textContent)
        }
        number.textContent = secretNumber
        number.style.width = '30rem'
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.check').addEventListener('click', () => {
            return
        })
    } else {
        if (Number(score.textContent) > 1){

            if(guess > secretNumber) {
                message.textContent = "📈 Too high!"
                
            } else {
                message.textContent = "📉 Too low!"
            }
        } else {
            message.textContent = "🧨 You lost the game!"
        }

        score.textContent = Number(score.textContent) - 1
    }
})