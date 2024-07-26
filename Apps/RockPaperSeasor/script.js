let computerChose;

let computerFun = () => {
  let computerOptions = ["rock", "paper", "scissor"];
  let randomNum = Math.floor(Math.random() * 3);
  computerChose = computerOptions[randomNum];
  //   console.log(computerChose);
  let comScoreContainer = document.getElementById("comScoreContainer");
  comScoreContainer.classList.remove("redShake");
  let userScoreContainer = document.getElementById("userScoreContainer");
  userScoreContainer.classList.remove("redShake");
};

let rockValue;
let rockFunc = () => {
  rockValue = "rock";
  // console.log("rock");
  paperValue = undefined;
  scissorsValue = undefined;
  console.log(rockValue);
};

let paperValue;
function paperFunc() {
  paperValue = "paper";
  // console.log("paper");
  rockValue = undefined;
  scissorsValue = undefined;
}

let scissorsValue;
function scissorsFunc() {
  scissorsValue = "scissor";
  // console.log("sc");
  paperValue = undefined;
  rockValue = undefined;
}

let animationSwitch = document.getElementById("animationSwitch");
let computerHand = document.getElementById("computerHand");
let letsPlay = document.getElementById("letsPlay");
let userHand = document.getElementById("userHand");
let disableClick = document.getElementById("disableClick");

const resultAnimation = () => {
  disableClick.style.pointerEvents = "none";

  letsPlay.style.backgroundColor = "#f0f5fc";
  letsPlay.textContent = "wait...";
  computerHand.setAttribute("src", `rock.png`);
  animationSwitch.classList += " animationOnOf";
  setTimeout(result, 1000);
};

const result = () => {
  animationSwitch.classList.remove("animationOnOf");
  computerHand.setAttribute("src", `${computerChose}.png`);
  disableClick.style.pointerEvents = "auto";

  if (computerChose === "rock" && paperValue === "paper") {
    letsPlay.textContent = "You Win";
    letsPlay.style.backgroundColor = "lightgreen";
    userHand.setAttribute("src", "paper.png");
    userScoreInc();
    // console.log(
    //   "You win" + " " + "comp:" + computerChose + " | " + "user:" + paperValue
    // );
    // console.log(rockValue + " " + paperValue + " " + scissorsValue);
  } else if (computerChose === "paper" && scissorsValue === "scissor") {
    letsPlay.textContent = "You Win";
    letsPlay.style.backgroundColor = "lightgreen";
    userHand.setAttribute("src", "scissor.png");
    userScoreInc();

    // console.log(
    //   "You win" +
    //     " " +
    //     "comp:" +
    //     computerChose +
    //     " | " +
    //     "user:" +
    //     scissorsValue
    // );
    // console.log(rockValue + " " + paperValue + " " + scissorsValue);
  } else if (computerChose === "scissor" && rockValue === "rock") {
    letsPlay.textContent = "You Win";
    letsPlay.style.backgroundColor = "lightgreen";
    userHand.setAttribute("src", "rock.png");
    userScoreInc();

    // console.log(
    //   "You win" + " " + "comp:" + computerChose + " | " + "user:" + rockValue
    // );
    // console.log(rockValue + " " + paperValue + " " + scissorsValue);
  } else if (computerChose === "rock" && scissorsValue === "scissor") {
    letsPlay.textContent = "You Lose";
    letsPlay.style.backgroundColor = "rgba(255, 0, 0, 0.473)";
    userHand.setAttribute("src", "scissor.png");
    computerScoreInc();
    // console.log(
    //   "You lose" +
    //     " " +
    //     "comp:" +
    //     computerChose +
    //     " | " +
    //     "user:" +
    //     scissorsValue
    // );
    // console.log(rockValue + " " + paperValue + " " + scissorsValue);
  } else if (computerChose === "paper" && rockValue === "rock") {
    letsPlay.style.backgroundColor = "rgba(255, 0, 0, 0.473)";
    userHand.setAttribute("src", "rock.png");
    letsPlay.textContent = "You Lose";

    computerScoreInc();

    // console.log(
    //   "You lose" + " " + "comp:" + computerChose + " | " + "user:" + rockValue
    // );
    // console.log(rockValue + " " + paperValue + " " + scissorsValue);
  } else if (computerChose === "scissor" && paperValue === "paper") {
    letsPlay.style.backgroundColor = "rgba(255, 0, 0, 0.473)";
    letsPlay.textContent = "You Lose";
    userHand.setAttribute("src", "paper.png");
    computerScoreInc();

    // console.log(
    //   "You lose" + " " + "comp:" + computerChose + " | " + "user:" + paperValue
    // );
    // console.log(rockValue + " " + paperValue + " " + scissorsValue);
  } else {
    letsPlay.textContent = "Draw";
    letsPlay.style.backgroundColor = "orange";
    rockValue === "rock" ? userHand.setAttribute("src", `rock.png`) : false;
    paperValue === "paper" ? userHand.setAttribute("src", `paper.png`) : false;
    scissorsValue === "scissor"
      ? userHand.setAttribute("src", `scissor.png`)
      : false;
    // console.log("Draw");
  }
};

// else if (rockValue === "scissor" && computerChose === "rock") {
//     console.log("You Lose");
//   } else if (rockValue === "paper" && computerChose === "scissor") {
//     console.log("You Lose");
//   } else if (rockValue === "rock" && computerChose === "paper") {
//     console.log("You Lose");
//   } else {
//     console.log("Draw");
//   }

// const result = () => {
//   if (
//     computerChose === rockValue ||
//     computerChose === paperValue ||

//     computerChose === scissorsValue
//   ) {
//     console.log("Draw");
//   } else if (computerChose === "rock" && paperValue === "paper") {
//     console.log("You win");
//   } else if (computerChose === "rock" && paperValue === "paper") {
//     console.log("You win");
//   }
// };

function computerScoreInc() {
  let computerScoreElement = document.getElementById("computerScore");
  let currentCompScore = Number(computerScoreElement.textContent);
  computerScoreElement.textContent = currentCompScore + 1;

  let userScoreElement = document.getElementById("userScore");
  let currentUserScore = Number(userScoreElement.textContent);

  currentUserScore >= 1 ? minusU(userScoreElement, currentUserScore) : false;
}
function minusU(userScoreElement, currentUserScore) {
  userScoreElement.textContent = currentUserScore - 1;
  userShake();
}
function userShake() {
  let userScoreContainer = document.getElementById("userScoreContainer");
  userScoreContainer.classList += " redShake";
}

//***************************

function userScoreInc() {
  let userScoreElement = document.getElementById("userScore");
  let currentUserScore = Number(userScoreElement.textContent);
  userScoreElement.textContent = currentUserScore + 1;

  let computerScoreElement = document.getElementById("computerScore");
  let currentCompScore = Number(computerScoreElement.textContent);
  currentCompScore >= 1
    ? minusC(computerScoreElement, currentCompScore)
    : false;
}
function minusC(computerScoreElement, currentCompScore) {
  computerScoreElement.textContent = currentCompScore - 1;
  comShake();
}
function comShake() {
  let comScoreContainer = document.getElementById("comScoreContainer");
  comScoreContainer.classList += " redShake";
}
