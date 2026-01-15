function Animal(type,speed,iscute,strength){
    this.type = type;
    this.speed = speed;
    this.iscute = iscute;
    this.strength = strength;
    this.battle = function(opponent){
        if(this.strength > opponent.strength){
            return this.type;
        }else if(opponent.strength > this.strength){
            return opponent.type;
        }else{
            return "It's a tie!";
        }        
}
}
let dog = new Animal("dog", 10, true, 5);
let cat = new Animal("cat", 8, true, 7);
const a = cat.battle(dog);
console.log("the winner is : " + a)
// let Battle = function (first,second){
//     if(first.strength > second.strength){
//         return first.type;
// }else if (second.strength > first.strength){
//     return second.type;
// }else{
//     return "It's a tie!";
// }        
// }
// const result = Battle(dog,cat);
// console.log("the winner is :", result + "  :))" 
