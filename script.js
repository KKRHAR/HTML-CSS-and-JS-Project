const game = () =>{
    let playerScore =0;
   let computerScore= 0;
     let moves=0;

    function playGame(){
        const rockbtn = document.querySelector('.rock');
        const paperbtn = document.querySelector('.paper');
        const scissorbtn = document.querySelector('.scissor');
        const playerOptions = [rockbtn,paperbtn,scissorbtn];
        const computerOptions = ['rock','paper','scissor'];

    playerOptions.forEach(options => {  
        options.addEventListener('click',() =>{
            const movesleft = document.querySelector('.move-left');
            moves++;
            movesleft.innerHTML = `Move Left:${10-moves}`;            
            const randomValue = Math.floor(Math.random()*3)
            const computerChoice = computerOptions[randomValue];
            

             winner(options.innerText,computerChoice)

        // Calling gameover function after 10 moves
        if(moves === 10){
            gameover(playerOptions,movesleft)
        } 

            

        })
    });

    }

    const winner = (player,computer)=>{
        const result = document.querySelector('.result')
        const playerScoreBoard = document.querySelector('.p-count')
        const computerScoreBoard = document.querySelector('.c-count')
        
       player = player.toLowerCase();
       computer = computer.toLowerCase()

        if(player === computer){
            result.innerText = "Tie";
        }
       else if(player === 'rock'){
        if(computer ==='paper'){
            result.innerText = "Computer Won"
            computerScore++;
            computerScoreBoard.innerText = computerScore;
        }
        else{
            result.innerText = "Player Won"
            playerScore++;
            playerScoreBoard.innerText = playerScore;
        }
       }
       else if(player === 'paper'){
        if(computer === 'rock'){
            result.innerText = "Player Won"
            playerScore++;
            playerScoreBoard.innerText = playerScore;
        }
        else{
            result.innerText = "Computer Won"
            computerScore++;
            computerScoreBoard.innerText = computerScore;
        }
       }
       else if (player ==='scissor'){
        if(computer==='paper'){
            result.innerText = "Player Won"
            playerScore++;
            playerScoreBoard.innerText = playerScore;
        }else{
            result.innerText = "Computer Won"
            computerScore++;
            computerScoreBoard.innerText = computerScore;
        }
       }
    }

    const gameover = (playerOptions,movesleft) =>{
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const restartbtn = document.querySelector('.restart');
    
    playerOptions.forEach(option =>{
        option.style.display='none';
    })
    chooseMove.innerText = "Game Over!!"
    movesleft.style.display = 'none';

    if(playerScore>computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'Player Won ';
        result.style.color = 'black';
    }
    else if(playerScore<computerScore){
        result.style.fontSize = '2rem';
        result.innerText = 'Computer Won';
        result.style.color = 'black';
    } else{
        result.style.fontSize = '2rem';
        result.innerText = 'Tie';
        result.style.color = 'black';
    }
restartbtn.innerHTML= "Restart"; 
restartbtn.style.display = "block";
restartbtn.addEventListener('click',()=>{
window.location.reload();
});
    }

playGame();
}
game();