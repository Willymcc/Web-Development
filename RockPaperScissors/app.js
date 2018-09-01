// caching the DOM
var userScore = 0;
var compScore = 0;
const userScoreSB = document.getElementById("user-score");
const compScoreSB = document.getElementById("cp-score");
const scoreBoard = document.querySelector("score-board");
const outcome = document.querySelector(".outcome > p");
const rock = document.getElementById("R");
const paper = document.getElementById("P");
const scissors = document.getElementById("S");


function getCPChoice(){
    const choices = ["R", "P", "S"];
    const random = Math.floor(Math.random() * 3);

    return choices[random];
}


function Userwin(userChoice, computerChoice){
  userScore++;
  userScoreSB.innerHTML = userScore;
  compScoreSB.innerHTML = compScore;

  const smallUserWord = "(YOUR)".fontsize(6).sub();
  const smallCompWord = "(Das Machine's)".fontsize(6).sub();
  outcome.innerHTML = `${smallUserWord} ${converttoWord(userChoice)} defeated ${smallCompWord}  ${converttoWord(computerChoice)}! You did it!`;

}


function Userlose(userChoice, computerChoice){
  compScore++;
  userScoreSB.innerHTML = userScore;
  compScoreSB.innerHTML = compScore;

  const smallUserWord = "(YOUR)".fontsize(6).sub();
  const smallCompWord = "(Das Machine's)".fontsize(6).sub();
  outcome.innerHTML = `${smallCompWord} ${converttoWord(computerChoice)} defeated ${smallUserWord}  ${converttoWord(userChoice)}! you lost :(`;
}

function draw(userChoice, computerChoice){


  const smallUserWord = "(YOUR)".fontsize(6).sub();
  const smallCompWord = "(Das Machine's)".fontsize(6).sub();
  outcome.innerHTML = `${smallUserWord} ${converttoWord(userChoice)} was the same as ${smallCompWord}  ${converttoWord(computerChoice)}! Its a Draw!`;
}



//converts HTML id Tags to strings for page display and returns to score method.
function converttoWord(letter){

  if(letter === "R")
    return "Rock";

  if(letter === "P")
    return "Paper";

  if(letter === "S")
    return "Scissors";

}


//
function game(userChoice){
    const computerChoice = getCPChoice();

    switch (userChoice + computerChoice) {
      case "RS":

      case "PR":

      case "SP":

      Userwin(userChoice, computerChoice)
        //console.log("You Win!");
        break;

      case "RP":

      case "PS":

      case "SR":

      Userlose(userChoice, computerChoice);
        //console.log("You Lose!");
        break;

      case "RR":

      case "PP":

      case "SS":

      draw(userChoice, computerChoice);
      // console.log("DRAW");
        break;
    }
}




function main(){
  rock.addEventListener('click', function(){
    game("R");
  })

  paper.addEventListener('click', function(){
    game("P");
  })

  scissors.addEventListener('click', function(){
    game("S");
  })
}

main();
