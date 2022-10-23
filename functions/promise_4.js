function generateNumberBeetween(minimun, maximun, time){

    if(maximun > maximun){
        [ maximun, minimun ] = [ minimun, maximun ]
        
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const factor = maximun - minimun + 1
            const randomNumber = parseInt(Math.random() * factor) + minimun
            resolve(randomNumber)
        }, time)
    })
}

function getBunchOfNumber(){
    return Promise.all(
        [
            generateNumberBeetween(1, 60, 1000),
            generateNumberBeetween(1, 60, 500),
            generateNumberBeetween(1, 60, 500),
            generateNumberBeetween(1, 60, 100),
            generateNumberBeetween(1, 60, 100),
        ]
    )
}

getBunchOfNumber().then(console.log)