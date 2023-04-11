let computerNum = Math.floor(Math.random() * 100);
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");

let chances = 5;
let chanceArea = document.getElementById("chance-area");
let gameOver = false;

let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  console.log("Correct", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "Please try a number between 1 and 100";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent =
      "You've already tried this number. Please try another number.";
    return;
  }

  chances--;
  chanceArea.textContent = `You have ${chances} more chances`;
  console.log("chance", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "UP!!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!!!";
  } else {
    resultArea.textContent = "AYE!! You've got it!!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = "true";
  }

  if (gameOver == true) {
    document.querySelector("#play-button").disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();

  resultArea.textContent = "Results here";
}

pickRandomNum();
