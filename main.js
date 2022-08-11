const red = document.querySelector('#redLight');
const yellow = document.querySelector('#yellowLight');
const green = document.querySelector('#greenLight');
const button = document.querySelector('#button');

let sinalColor = 'green';
let time = 10;
let timeInterval;
let buttonCliclable = true;
let timer = document.getElementById("timer");
let timeRedInterval;

const setGreen = () => {
    sinalColor = 'green'
    red.classList.remove('redLightOn');
    red.classList.add('redLightOff')
    yellow.classList.remove('yellowLightOn');
    yellow.classList.add('yellowLightOff')
    green.classList.remove('greenLightOff')
    green.classList.add('greenLightOn');
}

const setYellow = () => {
    sinalColor = 'yellow'
    green.classList.remove('greenLightOn');
    green.classList.add('greenLightOff');
    yellow.classList.remove('yellowLightOff');
    yellow.classList.add('yellowLightOn');
}

const setRed = () => {
    sinalColor = 'red'
    yellow.classList.remove('yellowLightOn');
    yellow.classList.add('yellowLightOff');
    red.classList.remove('redLightOff');
    red.classList.add('redLightOn');
}

const normalizeSinal = () => {
    timeInterval = setInterval(() => {
        timer.innerHTML = time;

        if (time === 3) {
            setYellow();
        }

        if (time === 10) {
            setGreen();
        }

        if (time === 0) {
            setRed();
            clearInterval(timeInterval);
            waitAndRestart();
        }

        time--;
    }, 1000);
};

const setRedCount = () => {
    redCount = 15;

    timeRedInterval = setInterval(() => {
        timer.innerHTML = redCount;

        redCount--;

        if (redCount === 0) {
            clearInterval(timeRedInterval);
        }
    }, 1000);
}


const waitAndRestart = () => {
    setRedCount();
    setTimeout(() => {
        time = 10;

        normalizeSinal();
    }, 15000);
};

const blockSignal = () => {
    buttonCliclable = false;
    
    setTimeout(() => {
        buttonCliclable = true;
    }, 60000);
};

const fechar = () => {  
    if (sinalColor !== "green" || !buttonCliclable) {
        return
    }

    time = 3;

    blockSignal();
};

normalizeSinal();