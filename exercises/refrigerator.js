class Food{
    constructor(type, quantity){
        this.type=type;
        this.quantity=quantity;
    }
}

class Refrigerator{
    constructor(){
        this.foods = []
    }
    putFood(food){
       this.foods.push(food)
    }
    getAndEatFood(type){
        for(let i = 0; i < this.foods.length; i++){
            if(this.foods[i].type === type && this.foods[i].quantity > 0){
                this.foods[i].quantity--;
                return;
            }
        }
        console.log("Sorry, no " + type.toLowerCase() + " remaining!");
    }
    getContents(){
        if(this.foods.length === 0){
            console.log("The refrigerator is empty.");
            
        }
        let message = "The refrigerator contains: ";
        for(let i = 0; i < this.foods.length; i++){
            message += this.foods[i].quantity + " " + this.foods[i].type.toLowerCase() + "(s)";
            if(i < this.foods.length - 1){
                message += ", ";
            }
        }
        message += ".";
        console.log(message);
    }
}

let r = new Refrigerator();
let apple = new Food('Apple', 2);
let bananas = new Food('Banana', 3);
r.putFood(apple);
r.putFood(bananas);
r.getContents();
r.getAndEatFood('Apple');
r.getAndEatFood('Apple');
r.getAndEatFood('Banana');
r.getAndEatFood('Apple');
r.getContents();