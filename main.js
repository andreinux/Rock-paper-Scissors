
let computerChoice = Math.floor(Math.random() * 3); 

function getComputerChoice(input){
    return input
}

console.log(getComputerChoice(computerChoice));

let humanchoice = parseInt(prompt("Enter your choice: 0 for rock, 1 for paper, 2 for scissors"));    
function getHumanChoice(input){
    return input
}
console.log(getHumanChoice(humanchoice));

function playRound(input1, input2){
    if (input1 === input2){
        return "It's a tie!"
        } else if (input1 === 0 && input2 ===1 || input1 ===1 && input2 === 2 || input1 ===2 && input2 === 0) {
            return "You win!"
        } else {
            return "You lose!";
        }
        }
console.log(playRound(computerChoice, humanchoice));