function getComputerChoice() {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber >= 0 && randomNumber <= 0.33) {
      return "Rock!";
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
      return "Paper!";
    } else if (randomNumber > 0.66){
        return "Scissors!"
    }
  }
  alert(getComputerChoice());

  
function getHumanChoice() {
    let input = prompt("Type your guess!", "rock, paper or scissors");
    console.log(input);
}
console.log(getHumanChoice());

var humanScore = 0;
var computerScore = 0;