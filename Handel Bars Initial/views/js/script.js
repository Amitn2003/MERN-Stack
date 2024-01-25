let optionRock = document.getElementById("rock");
let optionPaper = document.getElementById("paper");
let optionSeasor = document.getElementById("seasor");
let gameDialoges = document.getElementById("gameDialoges");
let user = document.getElementById("user");
let computer = document.getElementById("computer");

let userScore = 0;
let computerScore = 0;

const generateNumber = () => {
  let tempRandomNum = Math.floor((Math.random() * 10) % 3);
  return tempRandomNum;
};

const updateScore = () => {
  user.innerText = userScore;
  computer.innerText = computerScore;
};

const game = (user, computer) => {
  if (
    (user == 0 && computer == 0) ||
    (user == 1 && computer == 1) ||
    (user == 2 && computer == 2)
  ) {
    updateScore();
    gameDialoges.innerText = "Match Draw";
    return -1;
  } else if (user === 0 && computer === 1) {
    gameDialoges.innerText = "Paper beats Rock!! You Lose";
    computerScore++;
    updateScore();
    return 0;
  } else if (user === 0 && computer === 2) {
    gameDialoges.innerText = "Rock beats Seasor!! You Win";
    userScore++;
    updateScore();
    return 1;
  } else if (user === 1 && computer === 0) {
    gameDialoges.innerText = "Paper beats Rock!! You Win";
    userScore++;
    updateScore();
    return 1;
  } else if (user === 1 && computer === 2) {
    gameDialoges.innerText = "Seasor beats Paper!! You Lose";
    computerScore++;
    updateScore();
    return 0;
  } else if (user === 2 && computer === 0) {
    gameDialoges.innerText = "Rock beats Seasor!! You Lose";
    computerScore++;
    updateScore();
    return 0;
  } else if (user === 2 && computer === 1) {
    gameDialoges.innerText = "Seasor beats Paper!! You Win";
    userScore++;
    updateScore();
    return 1;
  } else {
    updateScore();
    alert("Invalid input");
    return -2;
  }
};
function rockFunc() {
  let computerNum = generateNumber();
  game(0, computerNum);
}
function paperFunc() {
  let computerNum = generateNumber();
  game(1, computerNum);
}
function seasorFunc() {
  let computerNum = generateNumber();
  game(2, computerNum);
}

optionRock.addEventListener("click", rockFunc);
optionPaper.addEventListener("click", paperFunc);
optionSeasor.addEventListener("click", seasorFunc);

// console.log("Hello")
