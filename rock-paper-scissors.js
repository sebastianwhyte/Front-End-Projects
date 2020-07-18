function greeting() {
  alert("Let's play rock, paper, scissors");

  alert("Please select a choice");
}

greeting();

var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(
    Math.random() * 3
  ); /* Math random generates a float between 0 and 1. If you want a number up to 3. You need to times Math.random by 3. Math.floor will
  round up the float to the nearest integer */
  return choices[randomNumber];
}

function game(userChoice) {
  const CPU = computerChoice();
  switch (userChoice + CPU) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      alert("You win!");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      alert("Computer wins!");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      alert("It's a tie!");
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("rock");
  });

  paper.addEventListener("click", function () {
    game("paper");
  });

  scissors.addEventListener("click", function () {
    game("scissors");
  });
}

main();
