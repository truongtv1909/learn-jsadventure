// class Foo{
//     static staticMethod(){
//         console.log('Static method');
//     }
//     anotherMethod(){
//         console.log('another method');
//     }
// }

// let foo = new Foo();

// foo.staticMethod();

function Foo(){
    
}
Foo.staticMethod = function(){
    console.log('like static method');
}
Foo.prototype.anotherMethod = function(){
    console.log('Another method');
}

let foo = new Foo();

Foo.staticMethod();