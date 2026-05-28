
let computerChoice = Math.floor(Math.random() * 3); 

function getComputerChoice(input){
    return input
}

if (computerChoice === 0){
    console.log("Computer chooses ROCK");
} else if (computerChoice === 1){
    console.log("Computer chooses PAPER");
} else {
    console.log("Computer chooses SCISSORS");
}

let humanchoice =(prompt("Enter your choice: ROCK, PAPER, OR SCISSORS"));   
function getHumanChoice(input){
    return input
}
console.log("Player Chooses ",getHumanChoice(humanchoice).toUpperCase());

function playRound(input1, input2){
    if (input1 === 0 && input2.toUpperCase() === "ROCK" || input1 === 1 && input2.toUpperCase() === "PAPER" || input1 === 2 && input2.toUpperCase() === "SCISSORS"){
        return "It's a tie!"
        } else if (input1 === 0 && input2.toUpperCase() ==="PAPER" || input1 ===1 && input2.toUpperCase() === "SCISSORS" || input1 ===2 && input2.toUpperCase() === "ROCK") {
            return "You win!"
        } else {
            return "You lose!";
        }
        }
console.log(playRound(computerChoice, humanchoice));