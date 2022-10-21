function generateNumberBeetween(minimun, maximun){

    if(maximun > maximun){
        [ maximun, minimun ] = [ minimun, maximun ]
        
    }

    return new Promise(resolve => {
        const factor = maximun - minimun + 1
        console.log(factor)
        const randomNumber = parseInt(Math.random() * factor) + minimun
        resolve(randomNumber)
    })
}

generateNumberBeetween(1,4).then(console.log)