
function waitFor(time = 2000){
    return new Promise(function (resolve){
        setTimeout( function(){
            console.log('Executing promise...')
            resolve()
        }, time);
    })
}

waitFor(4000)
.then(waitFor())
.then(waitFor())