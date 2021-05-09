const player1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};
const player2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resButton = document.querySelector("#resButton");
let selectWinningScore = document.querySelector("#playto");

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      player.display.classList.add("text-success");
      opponent.display.classList.add("text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
      isGameOver = true;
    }
    player.display.textContent = player.score;
  }
}

player1.button.addEventListener("click", function () {
  updateScores(player1, player2);
});

player2.button.addEventListener("click", function () {
  updateScores(player2, player1);
});

selectWinningScore.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  for (let p of [player1, player2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("text-success", "text-danger");
    p.button.disabled = false;
  }
}
