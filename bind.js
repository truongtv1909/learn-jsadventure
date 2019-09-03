let mouse = {
    name: 'mickey',
    sayHi: function(){
        console.log(`${this.name} can say: Hello!.`);
    }
}
let cat = {
    name: 'tom'
}
 let say = mouse.sayHi.bind(mouse);
 say();
// console.log(mouse.sayHi);