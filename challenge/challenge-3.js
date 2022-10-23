const fn = require('fs')
const path = require('path')

function readFile(dataPath) {
    return new Promise((resolve) => {
        fn.readFile(dataPath,function(err, data){
            resolve(data.toString())
        })
        console.log('After read...')
    })
}


const dataPath = path.join(__dirname, '../data.txt')

readFile(dataPath).then((data) => {
   return data.split('\n')
}).then((data) => {
    console.log(data[0])
})