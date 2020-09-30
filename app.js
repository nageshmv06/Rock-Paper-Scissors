const game = function() {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = function() {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.toggle("fadeOut");
        match.classList.toggle("fadeIn");
      });
    };
    //Play Match
    const playMatch = function() {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(function(hand) {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(function(option){
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() =>{
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = function() {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = function(playerChoice, computerChoice) {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie

      if(pScore < 4 && cScore < 4){
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
          }
          //Check for Rock
          if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
              winner.textContent = "Player wins";
              pScore++;
              updateScore();
              return;
            } else {
              winner.textContent = "Computer wins";
              cScore++;
              updateScore();
              return;
            }
          }
          //Check for Paper
          if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
              winner.textContent = "Computer wins";
              cScore++;
              updateScore();
              return;
            } else {
              winner.textContent = "Player wins";
              pScore++;
              updateScore();
              return;
            }
          }
          //Check for Scissors
          if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
              winner.textContent = "Computer wins";
              cScore++;
              updateScore();
              return;
            } else {
              winner.textContent = "Player wins";
              pScore++;
              updateScore();
              return;
            }
          }
      }else{
           
            pScore = 0;
            cScore = 0;
            updateScore();
            // introScreen.classList.toggle("fadeOut");
            // match.classList.toggle("fadeIn");
            startGame();
           
      }
      
    } 
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();