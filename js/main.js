/*-- global variables --*/

var pirateWords = ['PARROT','ANCHOR', 'SAILOR', 'SWORDS', 'SILVER'];
var pirateWord;
var pirateWordArr;
var guess;
var badGuesses;
var message;

/*-- event listeners --*/

$('#letters').on('click', 'button', handleClick);

/*-- cached elements --*/

var $answerDisplay = $('#answer');
var $messageDisplay = $('#message');

/*-- functions --*/

function handleClick(evt) {
  var letter = this.textContent;
  if (pirateWord.includes(letter)) {
    replaceUnderscores(letter);
    // replace all occurances of letter in the guess in the correct pos
  } else {
    badGuesses.push(letter);
  }
  if (guess === pirateWord) {
    message = "You win!";
  } else if (badGuesses.length === 6) {
    message = "You're pirate hanged!";
  }
  render();
}

function render() {
  $answerDisplay.html(guess);
  $messageDisplay.html(message);
}

function replaceUnderscores(letter) {
  var guessArr = guess.split("");
  // loop through pirateWord looking for the letter
  // if found, update guess with the letter in the pos found
  pirateWordArr.forEach(function(char, idx) {
    if (char === letter) guessArr[idx] = letter;
  });
  guess = guessArr.join("");
}

function startGame() {
  pirateWord = pirateWords[Math.floor(Math.random() * pirateWords.length)];
  pirateWordArr = pirateWord.split("");
  badGuesses = [];
  message = "";
  guess = "";
  for (var i = 0; i < pirateWord.length; i++) {
    guess = guess + "_";
  }
  render();
}

function resetGame() {
  $resetGame.html(reset);
}

startGame();
