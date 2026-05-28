
let computerChoice = Math.floor(Math.random() * 3); 

function getComputerChoice(input){
    return input
}

console.log(getComputerChoice(computerChoice));

let humanchoice =(prompt("Enter your choice: ROCK, PAPER, OR SCISSORS"));   
function getHumanChoice(input){
    return input
}
console.log(getHumanChoice(humanchoice));

function playRound(input1, input2){
    if (input1 === input2){
        return "It's a tie!"
        } else if (input1 === 0 && input2.toUpperCase() ==="ROCK" || input1 ===1 && input2.toUpperCase() === "PAPER" || input1 ===2 && input2.toUpperCase() === "SCISSORS") {
            return "You win!"
        } else {
            return "You lose!";
        }
        }
console.log(playRound(computerChoice, humanchoice));