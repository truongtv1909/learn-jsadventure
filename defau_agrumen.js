function greeting(name = 'friend', lang='ja'){
    if(lang ==='en'){
        return `Hi!. ${name}`;
    }if(lang ==='ja'){
        return `Konnichiwa!. ${name}`;
    }else{
        return 'Chao ban'
    }
}


// console.log(greeting('Truong'));
console.log(greeting('Truong'));