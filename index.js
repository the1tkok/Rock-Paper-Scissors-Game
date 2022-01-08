
let cScore = 0;
let hScore = 0;

let computerPlayer = () => {

        cPlayerOutput = Math.floor(Math.random() * 3) + 1; //Generate random number

        let output1 = ""; //empty variables to store generated outputs in
        let output2 = "";
        let output3 = "";

        if (cPlayerOutput === 1) { //Store string "rock" in output1 when number 1 is generated
            output1 = "rock";
            
        } else if (cPlayerOutput === 2) { //Store string "paper" in output2 when number 2 is generated
            output2 = "paper";
            
        } else if (cPlayerOutput === 3) { //Store string "scissors" in ouput3 when number 3 is generated
            output3 = "scissors";
            
        }

        let humanPlayer = () => {
            
            hPlayerOutput = prompt(("Choose rock, paper, or scissors:")).toLowerCase(); //prompt human player to enter a selection between "rock, paper, and scissors"

            outputSelection = "You chose: ";
            console.log(outputSelection); //display "You chose: "

            console.log(hPlayerOutput); //display selection of player

            if (hPlayerOutput === "rock" && cPlayerOutput === 1) {      //if and else if statements to compare values between computer and human and print outcome
                console.log("Computer chose: ", output1)                //also add +1 score to winner of each round, do nothing if round is a Draw
                console.log("Draw!");
            } else if (hPlayerOutput === "paper" && cPlayerOutput === 2) {
                console.log("Computer chose: ", output2)
                console.log("Draw!")
            }  else if (hPlayerOutput === "scissors" && cPlayerOutput === 3) {
                console.log("Computer chose: ", output3)
                console.log("Draw!")
            } else if (hPlayerOutput === "rock" && cPlayerOutput === 2) {
                console.log("Computer chose: ", output2)
                console.log("You lose! Paper beats rock.")
                    cScore++;
            } else if (hPlayerOutput === "rock" && cPlayerOutput === 3) {
                console.log("Computer chose: ", output3)
                console.log("You win! Rock beats scissors")
                    hScore++;
            } else if (hPlayerOutput === "paper" && cPlayerOutput === 3) {
                console.log("Computer chose: ", output3)
                console.log("You lose! Scissors beats paper.")
                    cScore++;
            } else if (hPlayerOutput === "paper" && cPlayerOutput === 1) {
                console.log("Computer chose: ", output1);
                console.log("You win! Paper beats rock.")
                    hScore++;
            } else if (hPlayerOutput === "scissors" && cPlayerOutput === 1) {
                console.log("Computer chose: ", output1)
                console.log("You lose! Rock beats scissors.")
                    cScore++;
            } else if (hPlayerOutput === "scissors" && cPlayerOutput === 2) {
                console.log("Computer chose: ", output2)
                console.log("You win! Scissors beats paper.")
                hScore++;
            }
                        
            let gameScore = () => { //Print scores
                
                console.log("Computer score: ", cScore);
                console.log("Your Score: ", hScore)
            }
            
            gameScore(); //Call game score function

        }

        humanPlayer(); //call nested humanPlayer function within primary function so that it runs when the primary function is called

}


let gameRounds = () => { //for loop to limit number of game rounds to 5 and print the current round
    for (let rounds = 1; rounds <= 5; rounds++) {
        computerPlayer();
        console.log("END OF ROUND: ", rounds);
        }
    }

    gameRounds();