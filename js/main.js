/*-- global variables --*/

var pirateWords = ['PARROT','ANCHOR', 'SAILOR', 'SWORDS', 'SILVER', 'BOOTIE', 'GOLD', 'MUTINY', 'CAPTAIN', "PIDGIN"];
var images = [
  "http://i.imgur.com/VBf2ebg.png",
  "http://i.imgur.com/l4mYJ7W.png",
  "http://i.imgur.com/uT1K8cA.png",
  "http://i.imgur.com/Lv8SaO4.png",
  "http://i.imgur.com/AjsvPMs.png",
  "http://i.imgur.com/vR7apNq.png",
  "http://i.imgur.com/wObF8tw.png"
];
var pirateWord;
var pirateWordArr;
var guess;
var badGuesses;
var message;

/*-- event listeners --*/

$('#letters').on('click', 'button', handleClick);
$('#reset').on('click', startGame);

/*-- cached elements --*/

var $answerDisplay = $('#answer');
var $messageDisplay = $('#message');
var $hangman = $('#hangman');

/*-- functions --*/

function handleClick(evt) {
  var letter = this.textContent;
  if (pirateWord.includes(letter)) {
    replaceUnderscores(letter);

  } else {
    badGuesses.push(letter);
  }
  if (guess === pirateWord) {
    message = "You Win!";
  } else if (badGuesses.length === 6) {
    message = "Your Pirate Hanged!";
  }
  render();
}

function render() {
  if (badGuesses.length === 6) {
    $('body').css('background', 'url(https://media.giphy.com/media/hcs50IS3AYg9i/giphy.gif)');
    $answerDisplay.hide();
    $('#letters').hide();
  } else {
    $answerDisplay.html(guess);
  }
  if (guess === pirateWord) {
    $('#letters').hide();
  }
  $messageDisplay.html(message);
  $hangman.attr('src', images[badGuesses.length]);
}

function replaceUnderscores(letter) {
  var guessArr = guess.split("");

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
  $answerDisplay.show();
  $('#letters').show();
  $('body').css('background', 'url(http://i.imgur.com/ErWYaXb.jpg)');

  render();
}


startGame();
