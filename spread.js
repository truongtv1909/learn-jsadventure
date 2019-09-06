// /spread
const a = [1,2,3];
const b = [0,...a,4];
const c = ['a','n','h'];
const d = {
    name : 'Tran van truong',
    age: 33,
    pass: 123456,
    like: {
        game: 'lol',
        sex: 'fuk'
    }
};

let ddd = JSON.parse(JSON.stringify(d));

let dd = {
    ...d
    // email: 'email@gmail.com'
}
ddd.like.sex = 'fuck';
dd.age = 29;
console.log({d,dd,ddd});

