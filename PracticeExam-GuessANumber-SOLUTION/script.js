//VARIABLES
let compNum = Math.floor(Math.random() * 5) + 1;
let currGuess = 0;

//ELEMENTS (common html elements that will be used multiple times)
let resultIMG = document.querySelector(".result");
let scoreOBJ = document.querySelector(".score");

//Guess Function
function guess() {
  let userGuess = this.name; //use "this" to get the object that caused this function to be called.
  // Access this objects ID which was 1, 2, 3, 4, or 5 in the html

  currGuess += 1; //increase the current guess number by 1
  scoreOBJ.textContent = "You have guessed " + currGuess + " times so far."; //display guess count

  //If the userGuess matches the compNum then win
  if (userGuess == compNum) {
    resultIMG.src = "YouWin.png";
    document.querySelector(".btnNewGame").addEventListener("click", newGame); //make reset button clickable
    document.querySelector(".num1").removeEventListener("click", guess);
    document.querySelector(".num2").removeEventListener("click", guess);
    document.querySelector(".num3").removeEventListener("click", guess);
    document.querySelector(".num4").removeEventListener("click", guess);
    document.querySelector(".num5").removeEventListener("click", guess);
  } else {
    resultIMG.src = "GuessTheNumber.png";
  }
  this.style.visibility = "hidden"; // once clicked, make number invisible
}

function newGame() {
  compNum = Math.floor(Math.random() * 5) + 1;

  document.querySelector(".num1").style.visibility = "visible";
  document.querySelector(".num2").style.visibility = "visible";
  document.querySelector(".num3").style.visibility = "visible";
  document.querySelector(".num4").style.visibility = "visible";
  document.querySelector(".num5").style.visibility = "visible";
  document.querySelector(".btnNewGame").removeEventListener("click", newGame);

  document.querySelector(".num1").addEventListener("click", guess);
  document.querySelector(".num2").addEventListener("click", guess);
  document.querySelector(".num3").addEventListener("click", guess);
  document.querySelector(".num4").addEventListener("click", guess);
  document.querySelector(".num5").addEventListener("click", guess);

  currGuess = 0;
  scoreOBJ.textContent = "You have guessed " + currGuess + " times so far.";
  resultIMG.src = "GuessTheNumber.png";
}

//Add event listeners
document.querySelector(".num1").addEventListener("click", guess);
document.querySelector(".num2").addEventListener("click", guess);
document.querySelector(".num3").addEventListener("click", guess);
document.querySelector(".num4").addEventListener("click", guess);
document.querySelector(".num5").addEventListener("click", guess);
