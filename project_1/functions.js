const fs = require('fs')
const path = require('path')

function readFolder(filePath) {

    return new Promise(function (resolve, reject) {
        try {
            let files = fs.readdirSync(filePath)
            files = files.map(file => path.join(filePath, file))
            resolve(files) 
        } catch (error) {
            reject(error)
        }
    })
}

function elementsEndingWith(array,pattern){
    return array.filter(element => element.endsWith(pattern))
}

module.exports = {
    readFolder,
    elementsEndingWith
}