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

function elementsEndingWith(pattern){
    return function (array){
        return array.filter(element => element.endsWith(pattern))
    }
}

function removeIfIncludes(textPattern){
    return function(lines){
        return lines.filter(element => !element.includes(textPattern))
    }

}

function removeLinesIfHaveOnlyNumbers(lines){
    return lines.filter(element => {
        const num = parseInt(element.trim())

        return num !== num
    })
}

function removeSymbols(symbols){
    return function(lines){
        return lines.map(element => {
            let textWithoutSymbols = element
            symbols.forEach(symbol => {
                textWithoutSymbols = textWithoutSymbols.split(symbol).join('')
            })

            return textWithoutSymbols
        })
    }

}


const mixContent = contents => contents.join('\n')

function separeteTextBy(symbol){
    return function(text){
        return text.split(symbol)
    }
}

function groupSameWords(words){
    return Object.values(words.reduce((accumulator, word) => {
        const element = word.toLowerCase()
        const quantity = accumulator[element] ? accumulator[element].quantity + 1 : 1
        accumulator[element] = { element: element, quantity }

        return accumulator
    },{}))

}

function orderByNumericAtribute(attr, order = 'asc'){
    return function(array){
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]

        return array.sort(order === 'asc' ? asc : desc)
    }
}


module.exports = {
    readFolder,
    readFile,
    readFiles,
    elementsEndingWith,
    removeIfIncludes,
    removeIfEmpty,
    removeLinesIfHaveOnlyNumbers,
    removeSymbols,
    mixContent,
    separeteTextBy,
    groupSameWords,
    orderByNumericAtribute
}