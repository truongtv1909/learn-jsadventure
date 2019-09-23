
// function getNum(maxNum) { // lay so chan > 0 < maxNum
//     let arrNum =[];
//     for(i=1;i<=maxNum;i++){
//         if(((i*3)-2)%2===0) arrNum.push(i);
//     }
//     return arrNum ;
// }


function getNum(maxNum,func) { // lay so chan > 0 < maxNum
    let arrNum =[];
    for(i=1;i<=maxNum;i++){
        if(func(i)) arrNum.push(i);
    }
    return arrNum ;
}

function sochan(i) {
    if(i%2===0) return i;
}

function sole(a) {
    if(a%2===1) return a;
}

function chia_het_cho_5(i) {
    if(i%5===0) return i;
}




const arr = getNum(23,chia_het_cho_5);
console.log(arr);