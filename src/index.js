import './scss/main.scss';

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "{}()[]#:;^,.?!'|&_`~@$%/\+-*";

let char = "";
let arr = [lowercase];

lowercaseBox.addEventListener('click', () => {
    const lowercaseIndex = arr.indexOf(lowercase);
    return (lowercaseIndex == -1) ? arr.push(lowercase) : arr.splice(lowercaseIndex, 1);
});
  
uppercaseBox.addEventListener('click', () => {
    const uppercaseIndex = arr.indexOf(uppercase);
    return (uppercaseIndex == -1) ? arr.push(uppercase) : arr.splice(uppercaseIndex, 1);
});
  
numbersBox.addEventListener('click', () => {
    const numbersIndex = arr.indexOf(numbers);
    return (numbersIndex == -1) ? arr.push(numbers) : arr.splice(numbersIndex, 1);
});
  
symbolsBox.addEventListener('click', () => {
    const symbolsIndex = arr.indexOf(symbols);
    return (symbolsIndex == -1) ? arr.push(symbols) : arr.splice(symbolsIndex, 1);
});

function passwordGen(number) {
    number = range.value;
    let joinedStrings = arr.join("");
    for(let i = 0; i < number; i++) {
        char += joinedStrings.charAt(Math.floor(Math.random() * joinedStrings.length));
    }
    return char;
};

range.addEventListener('input', () => {
    charInfo.innerHTML = range.value + ' characters';
});

const checkboxes = document.querySelectorAll('input[type=checkbox]');
const checkboxesArr = Array.from(checkboxes);
const checkboxIndicators = document.querySelectorAll('.checkbox_indicator');

function addRedAlertWithoutTransition() {
    setTimeout(function(){
        appAlert.classList.add('app_alert--red');
    }, 1);
    checkboxIndicators.forEach(val => val.style.border = "1px solid #ec4949");
}

function addGreenAlertWithTransition() {
    setTimeout(function(){
        appAlert.classList.add('app_alert--green');
    }, 1);
}

function removeRedAlert() {
    appAlert.classList.remove('app_alert--red');
    checkboxIndicators.forEach(val => val.style.border = "1px solid lightgrey");
}

function removeGreenAlert() {
    appAlert.classList.remove('app_alert--green');
}

function validator() {
    if(typeof arr[0] != "string") {
        removeGreenAlert();
        addRedAlertWithoutTransition();
    } else {
        removeRedAlert();
    }
}

generateBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    validator();
    char = "";
    passwordGen();
    password.value = char;
});

resetBtn.addEventListener('click', () => {
    removeRedAlert();
    password.value = '';
    range.value = 10;
    charInfo.innerHTML = range.value + ' characters';
    checkboxesArr.forEach(val => val.checked = false);
    checkboxesArr[0].checked = true;
    arr = [lowercase];
});

copyBtn.addEventListener('click', () => {
    removeGreenAlert();
    if (appAlert.classList.contains('app_alert--red') != false) {
        removeGreenAlert();
    } else {
        addGreenAlertWithTransition();
    }
    password.select();
    password.setSelectionRange(0, 32);
    document.execCommand("copy");
    password.blur();
});