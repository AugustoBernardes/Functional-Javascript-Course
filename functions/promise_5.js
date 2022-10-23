function workOrNot(value, errorChance){
    return new Promise((resolve, reject) => {
        if(Math.random() < errorChance){
            reject('Happened a error');
        } else {
            resolve(value);
        }
    });

}

workOrNot('Test', 0.5)
.then(value => console.log(`Returned value: ${value}`))
.catch(err => console.log(`Error: ${err}`))