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