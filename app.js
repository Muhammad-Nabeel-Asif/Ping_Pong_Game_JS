// Capturing Buttons for incrementing Scores of Player 1 and Player 2 and a Reset Button .
const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resButton = document.querySelector("#resButton");
// Capturing initial Scores of Player 1 and Player 2 .
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");

let selectWinningScore = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;

let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      p1Display.classList.add("text-success");
      p2Display.classList.add("text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      p2Display.classList.add("text-success");
      p1Display.classList.add("text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

selectWinningScore.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p1Score;
  p1Display.classList.remove("text-success", "text-danger");
  p2Display.classList.remove("text-success", "text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
