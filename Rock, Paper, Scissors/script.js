const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userTotalScore = document.querySelector("#user-score");
let compTotalScore = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const compChoice = () => {
  //rock. paper, scissor
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

const printUserScore = (userScore) => {
  userTotalScore.innerText = userScore;
};
const printCompScore = (compScore) => {
  compTotalScore.innerText = compScore;
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  const genCompChoice = compChoice();
  if (userChoice === genCompChoice) {
    msg.style.backgroundColor = "black";
    msg.innerText = "Game was Draw. Play Again.";
  } else if (userChoice === "rock" && genCompChoice === "paper") {
    msg.innerText = "Paper beats Rock. Computer wins";
    msg.style.backgroundColor = "red";
    compScore++;
    printCompScore(compScore);
  } else if (userChoice === "rock" && genCompChoice === "scissor") {
    msg.innerText = "Rock beats scissor. You wins";
    msg.style.backgroundColor = "green";
    userScore++;
    printUserScore(userScore);
  } else if (userChoice === "paper" && genCompChoice === "rock") {
    msg.innerText = "Paper beats Rock. You wins";
    msg.style.backgroundColor = "green";
    userScore++;
    printUserScore(userScore);
  } else if (userChoice === "paper" && genCompChoice === "scissor") {
    msg.innerText = "Scissor beats Paper. Computer wins";
    msg.style.backgroundColor = "red";
    compScore++;
    printCompScore(compScore);
  } else if (userChoice === "scissor" && genCompChoice === "paper") {
    msg.innerText = "Scissor beats Paper. You wins";
    msg.style.backgroundColor = "green";
    userScore++;
    printUserScore(userScore);
  } else if (userChoice === "scissor" && genCompChoice === "rock") {
    msg.innerText = "Rock beats Scissor. Computer wins";
    msg.style.backgroundColor = "red";
    compScore++;
    printCompScore(compScore);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
