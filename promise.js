// const fs = require('promise-fs');

// function onDone(song){
//     console.log(song);
// }
// function onErr(err){
//     console.log(err);
// }
// function readF(path){
//     return fs.readFile(path,{encoding:'utf8'})
// }



// readF('song2.txt')
// .then(onDone)
// .then(()=> readF('song.txt'))
// .then(onDone)
// .catch(onErr);

const fs = require('fs');

function readFilePromise(path){
    return new Promise(function(res,rej){
        fs.readFile(path,{encoding:'utf8'},function(err,data){
            if(err){
                rej(err);
            }else{
                res(data);
            }
        });
    });
}

readFilePromise('song22.txt')
.then(function(res){
    console.log(res);
})
.then(function(){
    return readFilePromise('song.txt');
})
.then(function(res){
    console.log(res);
})
.catch(function(rej){
    console.log(rej);
})