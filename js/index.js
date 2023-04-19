//ES MODULES
//import resetControls from "./controls.js"// default export
//import {Timer} from "./timer.js" //named import
//dom
// document objetct model
//refatoração: mudar um código para deixa-lo mais entendivel
//deixar o código mais performático
//sem alterar suas funcionalidades

import Controls from "./controls.js"
import Timer from "./timer.js" 
import { elements } from "./elements.js"
import Sound from "./sounds.js"
//injeção de dependencias

const {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonSoundOff,
    buttonSoundOn,
    minutesDisplay,
    secondsDisplay
} = elements

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

const sound = Sound()

// programação imperativa
//eventd driven
//callback (toda função que você passa como argumento para outra função, é um callback.)
//refatoração
buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
    
})

buttonPause.addEventListener('click', function(){
    controls.pause()
    timer.hold()    
    sound.pressButton()
})

buttonStop.addEventListener('click', function() {
   controls.reset()
   timer.reset()
   sound.pressButton()
})

buttonSoundOff.addEventListener('click', function(){
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
    sound.bgAudio.pause()
})

buttonSoundOn.addEventListener('click', function(){
    buttonSoundOff.classList.remove('hide')
    buttonSoundOn.classList.add('hide')
    sound.bgAudio.play()
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