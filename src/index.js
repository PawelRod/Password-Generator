import './scss/style.scss'

var letters = "abcdefghijklmnopqrstuvwxyz";
var char = "";

function passwordGen() {
    for(let i = 0; i < 10; i++) {
        char += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return char;
};

console.log(passwordGen())