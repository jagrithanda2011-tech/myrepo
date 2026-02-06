// function runTwice(fn){
//     fn();
//     fn();
// }
// runTwice(() => console.log("hello world") );
// function printHello(){
//     console.log("hello world");
// }
// runTwice(printHello);
// let x = printHello;
// let y=printHello();
// runTwice(printHello)

//question2

// const multiplication = (factor) =>{
//     return function(number){
//         return factor * number;
//     }

// }

// const double = multiplication(3);
// console.log(double(10));

//currying
function printMessage(name){
    return function printMessageForName(message){
        return name + " : " + message;
    }
}
const newMessage = printMessage("John");
console.log(newMessage("hi how are you?"))

const double = x => x * 2;
const increment = x => x + 1;
const composed = x => double(increment(x));
console.log(composed(3)); // 8