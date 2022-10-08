const homeScoreboard = document.getElementById("home-score");
const guestScoreboard = document.getElementById("guest-score");
const buttons = document.querySelectorAll("button");
console.log(homeScoreboard);

let homeScore = 0;
let guestScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const scoreOwner = e.target.parentElement.dataset.key;
    const score = Number(e.target.textContent);
    changeScore(scoreOwner, score);
  });
});

function changeScore(scoreOwner, score) {
  if (scoreOwner == "home") {
    homeScore += score;
    homeScoreboard.textContent = homeScore;
  } else {
    guestScore += score;
    guestScoreboard.textContent = guestScore;
  }
}
