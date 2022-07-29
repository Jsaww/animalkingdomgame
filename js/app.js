const animalNames = [
	"BEAR",
  "SCORPION",
	"PENGUIN",
	"LION",
	"PANDA",
	"ZEBRA",
	"BAT",
	"HIPPO",
	"CAMEL",
	"HORSE",
	"ELEPHANT",
	"RHINO",
	"KOALA",
	"MONKEY",
  "LEOPARD",
  "SHARK",
  "DOG",
  "ALLIGATOR",
  "CROCODILE",
  "SNAKE",
  "DOLPHIN",
  "OWL",
  "KANGAROO",
  "PANTHER",
  "HYENA",
  "GIRAFFE",
  "CHEETAH"
]
let attempts = [];
let correctAnswer = '';
let incorrect = 8;
let wrong = 0;
let animalName = null;

function randAnimalName() {
  correctAnswer = animalNames[Math.floor(Math.random() * animalNames.length)];
}

function collectAttempt(selectedLetter) {
  attempts.indexOf(selectedLetter) === -1 ? attempts.push(selectedLetter) : null;
  document.getElementById(selectedLetter).setAttribute('disabled', true);

  if (correctAnswer.indexOf(selectedLetter) >= 0) {
    inaccurateGuess();
    winnerLives();
  } else if (correctAnswer.indexOf(selectedLetter) === -1) {
    wrong++;
    reviseTrys();
    loserEaten();
  }
}

function btns() {
  let keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
    `
      <button
        class="btn"
        id='` + letter + `'
        onClick="collectAttempt('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('The keys').innerHTML = keys;
}

function loserEaten() {
  if (wrong === incorrect) {
    document.getElementById('winLoseText').innerHTML = 'Correct Answer Was: ' + correctAnswer;
    document.getElementById('The keys').innerHTML = 'The Animals Feasted On Your Remains!';
  }
}

function winnerLives() {
  if (animalName === correctAnswer) {
    document.getElementById('The keys').innerHTML = 'Safari Expedition Survived!';
  }
}

function reviseTrys() {
  document.getElementById('wrong').innerHTML = wrong;
}

function inaccurateGuess() {
  animalName = correctAnswer.split('').map(letter => (attempts.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  document.getElementById('winLoseText').innerHTML = animalName;
}

function restartGame() {
  wrong = 0;
  attempts = [];
  
  btns();
  inaccurateGuess();
  randAnimalName();
  reviseTrys();
}

document.getElementById('incorrect').innerHTML = incorrect;
btns();
randAnimalName();
inaccurateGuess();
