alert("Hello from first")
let pElement= document.getElementsByTagName("p")
for(let i = 0; i < 5; i++){
    let a = pElement[i].innerHTML="updated";
    
}
pElement.array.forEach(element => {
    element.innerHTML="updated";
});