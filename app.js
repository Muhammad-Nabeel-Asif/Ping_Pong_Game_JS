// Capturing initial Scores of Player 1 and Player 2 .
let p1Score = document.querySelector('#p1Score');
let p2Score = document.querySelector('#p2Score');
p1Score = 0;
p2Score = 0;
// Capturing Buttons for incrementing Scores of Player 1 and Player 2 and a Reset Button .
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resButton = document.querySelector('#resButton');

p1Button.addEventListener('click', function () {
    p1Score++;
    document.querySelector('#p1Score').innerHTML = p1Score;
});

p2Button.addEventListener('click', function () {
    p2Score++;
    document.querySelector('#p2Score').innerHTML = p2Score;
});

resButton.addEventListener('click', function () {
    document.querySelector('#p1Score').innerHTML = 0;
    document.querySelector('#p2Score').innerHTML = 0;

})
