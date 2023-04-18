//ES MODULES

//import resetControls from "./controls.js"// default export
import Controls from "./controls.js"
import Timer from "./timer.js" 
//import {Timer} from "./timer.js" //named import

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



//injeção de dependencias

const controls = Controls ({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
})

const timer = Timer( {
    minutesDisplay, 
    secondsDisplay, 
    resetControls: controls.reset,
})

// programação imperativa
//eventd driven
//callback (toda função que você passa como argumento para outra função, é um callback.)
//refatoração
buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()    
})

buttonStop.addEventListener('click', function() {
   controls.reset()
   timer.reset()
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
   let newMinutes = controls.getMinutes()

   if (!newMinutes) {
    timer.reset()
    return
   }

   timer.updateDisplay(newMinutes, 0)
   timer.updateMinutes(newMinutes)
})