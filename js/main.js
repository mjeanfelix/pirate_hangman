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
$('#reset').on('click', startGame); //activates reset button-links it to startGame properties which sets everything to zero

/*-- cached elements --*/

var $answerDisplay = $('#answer');
var $messageDisplay = $('#message');
var $hangman = $('#hangman');

/*-- functions --*/

function handleClick(evt) {
  var letter = this.textContent;
  if (pirateWord.includes(letter)) {
    replaceUnderscores(letter);
    // replace all occurances of letter in the guess in the correct pos
  } else {
    badGuesses.push(letter);//
  }
  if (guess === pirateWord) {
    message = "You win!";
  } else if (badGuesses.length === 6) {
    message = "Your pirate hanged!";
  }
  render();
}
/*
function alert() {
  if (badGuesses === 6) {
    $('#alert').css('display': 'inline-block');
  }
}
*/
function render() {
  if (badGuesses.length === 6) {
    $('body').css('background', 'url(http://i.imgur.com/xDPADDN.jpg)');/* grabs the NEW background image from the html*/
    $answerDisplay.hide();/* hides the answer display if bg===6*/
    $('#letters').hide();/*hides the alphabet if bg==6*/
  } else {
    $answerDisplay.html(guess);
  }
  if (guess === pirateWord) {
    $('#letters').hide();/*hides alpha when correct guess is made forcing user to reset*/
  }
  $messageDisplay.html(message); //display 'you win or yr hanged' message
  $hangman.attr('src', images[badGuesses.length]); //takes the hangman add the attribute to image source
}//badGuess length index for the images so you go from one image to the next

function replaceUnderscores(letter) {
  var guessArr = guess.split("");
  // loop through pirateWord looking for the letter
  // if found, update guess with the letter in the pos found
  pirateWordArr.forEach(function(char, idx) {
    if (char === letter) guessArr[idx] = letter;
  });
  guess = guessArr.join(""); //splits guess into an array checks each letter in the array and then.joins the array back into a word//
}

/*example to terniary function to make badGuesses change the image*/
// $(function() {
  // $(.head).css('display', badGuesses.length === 1 ? 'inline-block' : 'none');
  // $(.torso).css('display', badGuesses.length === 2 ? 'inline-block' : 'none');
//   if (badGuesses.length === 1)
//   return $(.head).css('display', 'inline-block');
// } else  {

function startGame() {
  pirateWord = pirateWords[Math.floor(Math.random() * pirateWords.length)];
  pirateWordArr = pirateWord.split("");
  badGuesses = []; //sets bG to empty at the start of the game//
  message = "";//sets m to empty at the start of the game//
  guess = "";//sets guess to empty at the start of the game//
  for (var i = 0; i < pirateWord.length; i++) {
    guess = guess + "_";//add an empty underscore to the pirateWord, iterates through out the word until they are all empty underscores//
  }
  $answerDisplay.show();/*resets the answerdisplay at game start*/
  $('#letters').show();/*resets the alphabet at game start*/
  $('body').css('background', 'url(http://i.imgur.com/ErWYaXb.jpg)');/*resets alpha at game start*/

  render();
}


startGame();
