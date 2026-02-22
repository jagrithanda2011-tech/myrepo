let userScore = 0;
let compScore = 0;
let msg = document.getElementById('msg');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let user = document.getElementById('user-score');
let comp = document.getElementById('computer-score');
const resetGame = document.getElementById('reset');

const compChoice = () => {
    const options = ['rock','paper','scissors'];
    const random = Math.floor(Math.random()*3);
    return options[random];
};

const playGame = (userChoice) => {
    const compChoices = compChoice();
    console.log(userChoice,compChoices);
    if(userChoice==compChoices){
        msg.innerText="It's a draw";
        msg.style.backgroundColor="blue";

    }else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoices ==="paper" ? false : true;

        }else if(userChoice==="paper"){
            userWin = compChoices ==="rock" ? true : false;
            
        }else{
            userWin = compChoices ==="rock" ? false : true;
        };
        showWinner(userWin,userChoice,compChoices);
       
    }
}

 const showWinner = (userWin,userChoice,compChoices) => {
    if(userWin===true){
        userScore++;
        user.innerText=userScore;
        msg.innerText=`You have won,Congratulatins, ${userChoice} beats ${compChoices}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        comp.innerText=compScore;
        msg.innerText=`You have lost,Computer won, ${compChoices} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    };
};

const choices = document.querySelectorAll('.choice');
choices.forEach((choices) => {
    choices.addEventListener('click',() => {
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    });
});



resetGame.addEventListener('click',() => {
    userScore=0;
    compScore=0;
    user.innerText=userScore;
    comp.innerText=compScore;
    msg.innerText="Play your move";
    msg.style.backgroundColor = "blue";
});