const firstElement = (array) => array[0]

const firstWord = (string) =>  string[0]

new Promise(function(resolve){
    resolve([ 'Joe', 'Natan', 'Jerome'])
}).then(firstElement)
    .then(firstWord)
    .then(console.log)