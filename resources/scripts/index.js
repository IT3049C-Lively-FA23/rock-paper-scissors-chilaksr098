// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button') ;
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');
const restBtn = document.getElementById('rest-button');


// instantiate the game object from the `RockPaperScissors` class.
let game = new RockPaperScissors();

// hide gamescreen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  const username = userName.value;
  let userScore = game.score.user;
  let cpuScore = game.score.cpu;
  scoreParagraph.innerText = username +': '+ userScore + ' v CPU: ' + cpuScore;
}
// updateGameHistoryUI
function updateGameHistoryUI(){
  let child = [gameHistoryParagraph.innerText];
  gameHistoryParagraph.innerHTML = game.gameHistoryLog;

  console.log(child);
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName.value;
  if(username.length == 0){
    alert("You have to input your name!")
  }else{
    game = new RockPaperScissors(username);
    gameScreen.classList.add("d-block")
  }
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  userselection = userSelection.value;
  game.play(userselection);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// rest-button EventListener
restBtn.addEventListener('click', function(){
  document.location.reload(false);
})
