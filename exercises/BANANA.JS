class Food {
    constructor(type, quantity){
        this.type=type;
        this.quantity=quantity;
    }
    whatIsThis(){
        console.log("this is a",this.type);
    }
    eatOne(){
        this.quantity--;
        if(this.quantity < 0){
            
            console.log("Sorry, no more " + this.type.toLowerCase() + " remaining!");
        }else{
        console.log("Slurp! one " + this.type.toLowerCase() + " eaten. " + this.quantity + " remaining.");
        }
        }
}
let banana = new Food('apple', 5);


banana.whatIsThis();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();