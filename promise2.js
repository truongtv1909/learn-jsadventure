const fs = require('fs');
function onDone(res){
    console.log(res);
}
function onErr(rej){
    console.log(rej);
}

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
readFilePromise('song2.txt')
.then(onDone)
.then(()=> readFilePromise('song.txt'))
.then(onDone)
.catch(onErr);
// async function run(){
//      let song1 = await readFilePromise('song11.txt');
//      let song2 = await readFilePromise('song2.txt');
//     //  console.log(song1,song2);
//      return [song1,song2];
// }
// run()
// .then(function(data){
//     console.log(data);
// })
// .catch(function(err){
//     console.log(err);
// })
