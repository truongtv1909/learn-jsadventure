// function greeting(){
//     console.log(`Hi!. ${this.name}. Iam ${this.age}`);
// }
// const cat = {
//     name: 'tom',
//     age: 100
// }
// greeting.call(cat);

function sum(){
  return  this.num1 + this.num2
}

const k = {
    num1: 2,
    num2: 3
}

var a =sum.call(k);
console.log(a);