class Anmi{
    constructor(name) {
        this.name = name;    
    }
    run(){
        console.log(`${this.name} is runing`)
    }
}

class Bird extends Anmi{
    fly(){
        console.log('can fly');
    }
}
// let cat = new Anmi('Tom');
// cat.run();

let b1 = new Bird('ChimTo');

console.log(b1.fly());