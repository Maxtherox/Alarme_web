//dom
// document objetct model

//refatoração: mudar um código para deixa-lo mais entendivel
//deixar o código mais performático
//sem alterar suas funcionalidades
const buttonPlay = document.querySelector('.play')
const buttonPause =  document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
let timertTimeOut
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)

function resetControls (){
            buttonPlay.classList.remove('hide')
            buttonPause.classList.add('hide')
            buttonSet.classList.remove('hide')
            buttonStop.classList.add('hide')
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2,'0')
    secondsDisplay.textContent = String(seconds).padStart(2,'0')
}

function resetTimer(){
    updateTimerDisplay(minutes, 0)
    clearTimeout(timertTimeOut)
}

function countdown(){
    timertTimeOut = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(minutes, 0)

        if (minutes <= 0){
            
            resetControls()
            return
        }

        if (seconds <= 0) {
            seconds = 60
            --minutes
        }
        updateTimerDisplay(minutes, (String(seconds -1)))
        
        countdown()
    }, 1000)
}
// programação imperativa
//eventd driven
//callback (toda função que você passa como argumento para outra função, é um callback.)
buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    countdown()
    
})

buttonPause.addEventListener('click', function(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timertTimeOut)
    
})

buttonStop.addEventListener('click', function() {
   resetControls()
   resetTimer()
})

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
})

buttonSet.addEventListener('click', function(){
    let newMinutes = prompt('Quantos minutos?') || 0
    if (!newMinutes) {
        resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})