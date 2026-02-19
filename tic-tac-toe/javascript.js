let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let winnerMsg = document.querySelector("#msg");
let playAgainBtn = document.querySelector("#playagain");
let winnerMsgConatiner = document.querySelector(".message");
let turn0 = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener('click' , () => {
        if(turn0){
            box.innerText="O";
            box.style.color = "blue";

            turn0=false;
        }else{
            box.innerText="X";
            box.style.color = "red";
            turn0=true;
        }
        box.disabled=true;
        count++;
checkWinner();

    })
});

const showWinner = (winner) => {
    winnerMsg.innerText = "WINNER is " + winner;
    winnerMsgConatiner.classList.remove("hide")
}


const checkWinner = () => {
    for(let i of winPatterns){
        let pos1 = boxes[i[0]].innerText;
        let pos2 = boxes[i[1]].innerText;
        let pos3 = boxes[i[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2===pos3){
                showWinner(pos1);
                for(let i of boxes){
                    i.disabled = true;
                }
            
            
            }
    }}if(count == 9) {        
            winnerMsg.innerText = `Draw`;
            winnerMsgConatiner.classList.remove('hide');
    }
}


const resetGame = () => {
    turn0=true;
    for(let i of boxes){
        i.disabled = false;
        i.innerText="";
        winnerMsgConatiner.classList.add('hide');
        count=0;
    }
}


playAgainBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);