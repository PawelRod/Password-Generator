import './scss/style.scss'

var letters = "abcdefghijklmnopqrstuvwxyz";
var char = "";

function passwordGen(number) {
    number = range.value;
    for(let i = 0; i < number; i++) {
        char += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return char;
};

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    char = "";
    passwordGen();
    input.value = char;
});