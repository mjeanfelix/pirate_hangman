/*-- global variables --*/

var pirateWordArr = ['parrot','anchor', 'sailor', 'swords', 'silver'];
var pirateWord;
var guess;
var badGuesses;
var message;

/*-- event listeners --*/

$('#letters').on('click', 'button', handleClick);
$('#answer').on('click', 'button', handleClick);

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
  pirateWord.indexOf(guess) {
    if true
  }

}

function replaceUnderscores(letter) {

}


function startGame() {
  pirateWord = pirateWordArr[Math.floor(Math.random() * pirateWordArr.length)];
  badGuesses = [];
  guess = "";
  for (var i = 0; i < pirateWord.length; i++) {
    guess = guess + "_";
  }



  // for(var i = 0; i <pirateWord.length; i++) {
  //   answerArray[i] = "_";
  // }
  // x = answerArray.join(" ");
  // document.getElementById("answer").innerhtml = x;
}

function letter() {
  var letter = document.getElementById("letter").value;
  if (letter.length>0) {
    for (var i = 0; i <pirateWord.length; i++) {
      if (pirateWord[1] ===letter) {
        answerArray[i] = letter;
      }
    }
  }
  count++
  document.getElementById("counter").innerhtml = "Num of clicks: "+ count;
  document.getElementById("answer").innerhtml = answerArray.join [" "];
}

startGame();
