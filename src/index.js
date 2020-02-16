import './scss/style.scss';
import img from './img/img-security.jpg';

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "{}()[]#:;^,.?!'|&_`~@$%/\+-*";

let char = "";
let arr = [];

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

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    char = "";
    passwordGen();
    input.value = char;
});

range.addEventListener('input', () => {
    charInfo.innerHTML = range.value + " characters";
});