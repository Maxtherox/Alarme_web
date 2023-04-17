//ES MODULES

import resetControls from "./controls.js"// default export
import {Timer} from "./timer.js" //named import

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
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timertTimeOut

//injeção de dependencias

const timer = Timer( {
    minutesDisplay, 
    secondsDisplay, 
    timertTimeOut, 
    resetControls,
})

// programação imperativa
//eventd driven
//callback (toda função que você passa como argumento para outra função, é um callback.)
//refatoração
buttonPlay.addEventListener('click', function(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')

    timer.countdown()
    
})

buttonPause.addEventListener('click', function(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timertTimeOut)
    
})

buttonStop.addEventListener('click', function() {
   resetControls()
   timer.resetTimer()
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
        timer.resetTimer()
        return
    }

    minutes = newMinutes
    updateTimerDisplay(minutes, 0)
})