function run(){
    console.log('run..');
}

function withRun(func) {
    let n=0;
    return function() {
        console.log(`ex: ${++n}`);
        return func();
    }
}

const countWithRun = withRun(run);
console.log(countWithRun)

countWithRun();
countWithRun();
countWithRun();
countWithRun();