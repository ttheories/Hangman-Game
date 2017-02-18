 var wordList = [
 "watermelon", "apple", "banana", "orange", "strawberry", "blueberry",
]

 var wordPlayed = "";
 var letterInWordPlayed = [];
 var numBlanks = 0;
 var blanksAndCorrects = [];
 var wrongs = [];

 var winCount = 0;
 var lossCount = 0;
 var numTries = 10;

 function startGame() {
  numTries = 10;
 blanksAndCorrects = [];
 wrongs = [];

wordPlayed = wordList[Math.floor(Math.random() * wordList.length)];
letterInWordPlayed = wordPlayed.split("");
numBlanks = letterInWordPlayed.length;
console.log(wordPlayed);
console.log(numBlanks);

for(var i=0; i < numBlanks; i++) {
	blanksAndCorrects.push("_");
}
console.log(blanksAndCorrects);	
document.getElementById('word-blank').innerHTML = blanksAndCorrects.join("_");
document.getElementById('guesses-left').innerHTML = numTries;

}






 function checkLetters(letter) {

 	var letterInWordPlayed = false;

 	for(var i =0; i < numBlanks; i++){
 		if(wordPlayed[i] === letter){
 			letterInWordPlayed = true;
 		}
 	}
if(letterInWordPlayed){
	for(i=0; i<numBlanks; i++){
		if(wordPlayed[i] === letter){
			blanksAndCorrects[i] = letter;
		}
		}
}else{numTries --;
		wrongs.push(letter)
}

 }

 function roundComplete() {
 	document.getElementById('word-blank').innerHTML=blanksAndCorrects.join(" ");;
 	document.getElementById('guesses-left').innerHTML = numTries;
 	document.getElementById('wrong-guesses').innerHTML = wrongs.join(" ");

 if(letterInWordPlayed === blanksAndCorrects){
 	winCount++;
 	alert("Win!");
 	document.getElementById('win-count').innerHTML = winCount;
 	startGame();
 	}
 	else if (numTries === 0){
 		document.getElementById('loss-count').innerHTML = lossCount++;
 		alert ("no more guesses");
 		startGame();
 	}


 }


 startGame();
 document.onkeyup = function(event) {
 	var wordPlayed=String.fromCharCode(event.keycode).toLowerCase();
 	checkLetters(wordPlayed)
 	roundComplete();

 }

