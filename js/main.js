
var pirateWordArr = ['parrot','anchor', 'sailor', 'swords', 'silver'];
console.log(pirateWordArr);

var pirateWord = pirateWordArr[Math.floor(Math.random() + pirateWordArr.length)];
console.log(pirateWord);
/*var x;
var count = 0;
var answerArray = [];*/

function wordsToUnderscore(word) {
    var underscores = "";
    for (var i = word.length +1; i >= 0; i++) {
      word[1]
    }
};
console.log(wordsToUnderscore);

function renderUnderscores(str){
  document.querySelector(".guess").innerHTML = str
}
function isOneInArray(pirateWordArr) {
  for (let index = 0; index < pirateWordArr.length; index++) {
    let currentItem = array[index];
    if (currentItem === 1) {
      return true;
      console.log(isOneInArray);
    }
  }
  return false;
}

/*var btn = document.querySelector('button');
btn.addEventListener('click', function(evt) {
  console.log(evt);
});
*/
$('#answer').on('click', 'button', function(){
  console.log(this);
})
/*
function blanksFromAnswer (answerWord) {

    var result = " ";
    for ( i in answerWord) {
        result = "_" + result;
    }
    return result;
}

function start() {
  for(var i = 0; i <pirateWord.length; i++) {
    answerArray[i] = "_";
  }
  x = answerArray.join(" ");
  document.getElementById("answer").innerhtml = x;
}

function letter() {
  var letter = document.getElementById("letter").value;
  if (letter.length>0)
{
  for (var i = 0; i <pirateWord.length; i++) {
    if (pirateWord[1] ===letter)

      answerArray[i] = letter;
    }
  }

    count++
    document.getElementById("counter").innerhtml = "Num of clicks: "+ count;
    document.getElementById("answer").innerhtml = answerArray.join [" "];
  }
*/
