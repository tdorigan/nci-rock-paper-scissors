document.addEventListener("DOMContentLoaded", () => {
  
  const btnPlay = document.getElementById("btnPlay");

  const playerRock = document.getElementById("playerRock");
  const playerPaper = document.getElementById("playerPaper");
  const playerScissors = document.getElementById("playerScissors");

  const playerOptions = document.getElementsByName("playerOptions");
  const computerOptions = document.getElementsByName("computerOptions");

  const playerScorePlaceholder = document.getElementById("playerScorePlaceholder");
  const computerScorePlaceholder = document.getElementById("computerScorePlaceholder");
  
  const resultPlaceholder = document.getElementById("resultPlaceholder");
  
  const optionsList = ["Rock", "Paper", "Scissors"];

  let playerScore = 0;
  let computerScore = 0;

  function play(){
    
    btnPlay.disabled = true;

    //get player option
    let playerOption = null;
    playerOptions.forEach(option => {
      if (option.checked) {
        playerOption = option.value;
      }
    });
    
    if (playerOption == null){
      resultPlaceholder.innerHTML = "Chose an option!";
      return;
    }

    //get computer option, random from 0 to 2, it will be used as an index
    let randomComputerOption = Math.floor(Math.random() * 3);

    //get the option name from the list according to the index
    let computerOption = optionsList[randomComputerOption];

    //populate computer radio according to the index
    computerOptions[randomComputerOption].checked = true;

    //check for a tie
    if (playerOption == computerOption) {
      resultPlaceholder.innerHTML = "It's a tie!";
    }
    else {
      //check player winner
      if ((playerOption == "Rock" && computerOption == "Scissors") ||
          (playerOption == "Paper" && computerOption == "Rock") ||
          (playerOption == "Scissors" && computerOption == "Paper")) {
            
            resultPlaceholder.innerHTML = "You win!";
            playerScore++;

      } 
      else {
        resultPlaceholder.innerHTML = "You Lose!";
        computerScore++;
      }

    }

    //update score
    playerScorePlaceholder.innerHTML = playerScore;
    computerScorePlaceholder.innerHTML = computerScore;

  }
  
  function reset(){
    
    resultPlaceholder.innerHTML = "";
    btnPlay.disabled = false;
    
    computerOptions.forEach(option => {
      option.checked = false;
    });

  }

  btnPlay.addEventListener("click", () => play());
  playerRock.addEventListener("click", () => reset());
  playerPaper.addEventListener("click", () => reset());
  playerScissors.addEventListener("click", () => reset());

});

