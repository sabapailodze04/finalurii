let jokeDiv = document.getElementById("joke");
let fetchButton = document.getElementById("fetchButton");
let thumbsUpButton = document.getElementById("thumbsUpButton");
let thumbsDownButton = document.getElementById("thumbsDownButton");
let counterDiv = document.getElementById("likeDislikeCounter");

let likeCount = 0;

function updateCounter() {
  counterDiv.textContent = "total Like/Dislike : " + likeCount;
}
function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      jokeDiv.textContent = data.value;
    });
}
fetchButton.addEventListener("click", getJoke);

function increaseLike() {
  likeCount++;
  updateCounter();
}
thumbsUpButton.addEventListener("click", increaseLike);
function decreaseLike() {
  if (likeCount > 0) {
    likeCount--;
    updateCounter();
  }
}
thumbsDownButton.addEventListener("click", decreaseLike);
