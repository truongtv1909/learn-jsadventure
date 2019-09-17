const Mouse = require('./mouse');
const Cat = require('./cat');


let tom = new Cat('Tom');
let mickey = new Mouse('mickey');
let jery = new Mouse('jery');


console.log(mickey);
console.log(jery);
console.log(tom);

console.log('--------------------------------as-------------------------');

tom.eat(mickey);

console.log(mickey);
console.log(jery);
console.log(tom);