/*
let randomNumber = Math.random();
console.log(randomNumber);
let result;
if (randomNumber < 0.3) {
    result = "rock"
} else {
    result = "paper"
}
return result;
}
*/

let number = Math.random();
let result;
console.log(number);
if (number >= 0 && number <= 0.33) {
    result = "Rock!";
} else if (number > 0.33 && number <= 0.66) {
    result = "Paper!";
} else {
    result = "Scissors!"
}
alert(result);

