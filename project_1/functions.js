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

function readFile(filePath){
    return new Promise(function (resolve, reject) {
        try {
            const content = fs.readFileSync(filePath, { encoding: 'utf-8' })
            resolve(content.toString())
        } catch (error) {
            reject(error)
        }
    })
}

function readFiles(filesPath){
    return Promise.all(filesPath.map((filePath => readFile(filePath))) )
}

function removeIfEmpty(array){
    return array.filter(element => element.trim())
}

function elementsEndingWith(array,pattern){
    return array.filter(element => element.endsWith(pattern))
}

function removeIfIncludes(lines, textPattern){
    return lines.filter(element => !element.includes(textPattern))

}

module.exports = {
    readFolder,
    readFile,
    readFiles,
    elementsEndingWith,
    removeIfIncludes,
    removeIfEmpty
}