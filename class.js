class Animal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} can eating............`);
    }
}

class Dog extends Animal{
    eat(cb){
        console.log(this.name,' Can eat and gam xuong');
        cb();
    }
}



let dog = new Dog('becgie');
console.log(dog.eat(function(){
    console.log('nhai xuong');
}));