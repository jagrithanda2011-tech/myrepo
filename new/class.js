//task1


// const newButton = document.createElement('button');
// newButton.innerHTML = "Click me!";
// newButton.onclick = changeText;
// let para = document.getElementById("ExampleID");
// para.appendChild(newButton);
// function changeText() {
//     let para = document.querySelector('p');
//     para.innerText="I can modify text.";
// }


//task2

const newButton = document.createElement('button');
newButton.innerText='click me '
document.body.append(newButton);
newButton.onclick = function() {
    const para2 =document.querySelectorAll("div > *");
    console.dir(para2);

    for (let i = 0; i < para2.length; i++) {
        para2[i].innerText='i Have replaced everthing';
    }

}


//Task3 


