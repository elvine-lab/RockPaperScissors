let computerScore = 0
let humanScore = 0

function getComputerChoice (){
    const randomChoice = Math.floor(Math.random()*3)

    switch (randomChoice){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }

}

function playRound (humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        return "GAME IS A TIE!"
    } else if ((humanChoice === "rock" && computerChoice === "scissors")||
    (humanChoice === "paper" && computerChoice === "rock")||
    (humanChoice === "scissors" && computerChoice === "paper")){
        humanScore++
        return `YOU WIN! ${humanChoice} beats ${computerChoice}`
    } else{
        computerScore++
        return `YOU LOSE! ${computerChoice} beats ${humanChoice}`
    }
}

function updateResults (result){
    document.getElementById("result").textContent = result
    document.getElementById("score").textContent = `You Score: ${humanScore} - Computer Score: ${computerScore}`
    if (humanScore === 5){
        document.getElementById("result").textContent = "🎉CONGRATULATIONS! YOU WON THE GAME."
        disableButtons()
    } else if (computerScore === 5) {
        document.getElementById("result").textContent = "💀 GAME OVER! COMPUTER WON THE GAME."
        disableButtons()
    }
}

function disableButtons(){
    document.querySelectorAll(".btn").forEach(button => button.disabled = true)
    document.getElementById("restart").style.display="block"
}
// Restart the game
function restartGame() {
    humanScore = 0;
    computerScore = 0;

    document.getElementById("result").textContent = "Choose an option to start playing!";
    document.getElementById("score").textContent = `You: 0 - Computer: 0`;

    document.querySelectorAll(".btn").forEach(button => button.disabled = false);
    document.getElementById("restart").style.display = "none"; 
}


document.getElementById("rock").addEventListener("click", () => {
    let result = playRound("rock", getComputerChoice())
    updateResults(result)
})

document.getElementById("paper").addEventListener("click", ()=>{
    let result = playRound("paper", getComputerChoice())
    updateResults(result)
})
document.getElementById("scissors").addEventListener("click", ()=>{
    let result = playRound("scissors", getComputerChoice())
    updateResults(result)
})

document.getElementById("restart").addEventListener("click", restartGame);