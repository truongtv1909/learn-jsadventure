// function log(a){
//     console.log(a);
// }
// log(1);

// function sum(...num){
//     return num.reduce((a,b)=>a+b,0);
// }


// console.log(sum(1,2,3,4,5));

function concat(separator, ...string){
    return string.join(separator);
}

console.log(concat('.','a','b','c'));