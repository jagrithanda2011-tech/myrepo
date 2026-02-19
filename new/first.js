let modeBtn = document.querySelector('#mode');
let currMode = "light";
modeBtn.addEventListener('click', () => {
    if(currMode==="light"){
        currMode="dark"
        document.querySelector('body').style.backgroundColor = "black";
        modeBtn.innerText = "Mode changed thank you";
    }else{
        currMode="light"
        document.querySelector('body').style.backgroundColor = "white";
        modeBtn.innerText = "Mode changed thank you 2";



    }
    console.log(currMode);
})