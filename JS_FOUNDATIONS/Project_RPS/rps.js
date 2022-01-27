let player= window.prompt("Rock, paper or scissors?")

let computerPlay =()=>{
    let random=Math.floor(Math.random()*3) 
    if(random===0){
        return "Rock"
    }
    if(random===1){
        return "Paper"
    }
    if(random===2){
        return "Scissors"
    }
}

let playRound=(playerSelection,computerSelection)=>{
    let PS= playerSelection.toLowerCase()
    let CS=computerSelection.toLowerCase()
    if (PS !== CS ){
        if(PS ==="rock" && CS==="paper"){
            computerScore++
            return "You lose! Paper beats rock!"
        }
        if(PS==="rock" && CS==="scissors"){
            playerScore++
            return "You win! Rock beats scissors!"
        }
        if(PS ==="paper" && CS==="rock"){
            playerScore++
            return "You win! Paper beats rock!"
        }
        if(PS ==="paper" && CS==="scissors"){
            computerScore++
            return "You lose! Scissors beats paper!"
        }
        if(PS ==="scissors" && CS==="rock"){
            computerScore++
            return "You lose! Paper beats rock!"
        }
        if(PS ==="scissors" && CS==="paper"){
            playerScore++
            return "You win! Scissors beats paper!"
        }

    }
    else{
        return "Tie!"
    }
}

let computerScore=0
let playerScore=0
let game=()=>{

    let count=1
    for (let i=0; i < 5; i++) {
        let computer= computerPlay()
        console.log(playRound(player,computer),playerScore,computerScore)
        count++
    }
    if (playerScore < computerScore) {
        console.log("Game ends. You lose, good luck next time!")
    }
    else if(playerScore===computerScore){
        console.log("Game ends.Tie game! Try again.")
    } 
    else{
        console.log("Games ends. You win! Congratz!!!!")
    }
}



let totalGame=game()
