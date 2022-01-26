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
            return "You lose! Paper beats rock!"
        }
        if(PS==="rock" && CS==="scissors"){
            return "You win! Rock beats scissors!"
        }
        if(PS ==="paper" && CS==="rock"){
            return "You win! Paper beats rock!"
        }
        if(PS ==="paper" && CS==="scissors"){
            return "You lose! Scissors beats paper!"
        }
        if(PS ==="scissors" && CS==="rock"){
            return "You lose! Paper beats rock!"
        }
        if(PS ==="scissors" && CS==="paper"){
            return "You win! Scissors beats paper!"
        }

    }
    else{
        return "Tie!"
    }
}

player= "Rock"
computer= computerPlay()

console.log(playRound(player,computer))