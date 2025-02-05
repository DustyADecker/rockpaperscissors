function getComputerChoice() {
    let randomNumber = Math.random(); // Generates a number between 0 (inclusive) and 1 (exclusive)
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