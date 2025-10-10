let num1 = 0
let num2 = 0
let round = 1

document.getElementById('pontuation1').innerText = num1
document.getElementById('pontuation2').innerText = num2
document.getElementById('period-count').innerText = 1

let periodCounter = document.getElementById('period-count')
let endPeriod = document.getElementById('end-period')
let homeScore = document.getElementById('pontuation1')
let guestScore = document.getElementById('pontuation2')
let resetScore = document.getElementById('reset-element')
let winnerGame = document.getElementById('winner')
let endGame = document.getElementById('end-game')

let homePlusOne = document.getElementById('plus-one-home')
let homePlusTwo = document.getElementById('plus-two-home')
let homePlusThree = document.getElementById('plus-three-home')

endGame.addEventListener('click', function(){ 
    let scoreHomeTeam = Number(homeScore.textContent)
    let scoreGuestTeam = Number(guestScore.textContent)

        if(scoreHomeTeam > scoreGuestTeam){
            winnerGame.textContent = `The winner is the Home team with ${scoreHomeTeam} points!`
        } else if (scoreHomeTeam < scoreGuestTeam){
            winnerGame.textContent = `The winner is the Guest team with ${scoreGuestTeam} points!`
        } else {
            winnerGame.textContent = `It's a draw!`
        }
})

function changePeriod(){
    round += 1
    periodCounter.textContent = round
}

function homeAdd1(){
    num1 = num1 + 1
    homeScore.textContent = num1
}

function homeAdd2(){
    num1 = num1 + 2
    homeScore.innerText = num1
}

function homeAdd3(){
    num1 = num1 + 3
    homeScore.innerText = num1
}

function guestAdd1(){
    num2 += 1
    guestScore.innerText = num2
}

function guestAdd2(){
    num2 += 2
    guestScore.innerText = num2
}

function guestAdd3(){
    num2 += 3
    guestScore.innerText = num2
}

function resetScoreboard(){
    homeScore.innerText = 0
    guestScore.innerText = 0
    periodCounter.innerText = 1
    winner.innerText = ' '
}