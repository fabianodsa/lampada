const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const reset = document.getElementById('redefining');

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
reset.addEventListener('click', resetar);
lamp.addEventListener('dblclick', lampBroken);


function lampOn () {
    lamp.src = './img/ligada.jpg'
}

function lampOff () {
    lamp.src = './img/desligada.jpg'
}

function lampBroken (){
    lamp.src = './img/quebrada.jpg'
}

function resetar () {
    lamp.src = './img/desligada.jpg'
}