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
import { buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    minutesDisplay,
    secondsDisplay } from "./elements.js"
import Sound from "./sounds.js"
import Events from "./events.js"
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

const sound = Sound()

Events({controls, timer, sound})
// programação imperativa
//eventd driven
//callback (toda função que você passa como argumento para outra função, é um callback.)
//refatoração
