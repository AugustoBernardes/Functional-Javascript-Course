const path = require('path')
const fn = require('./functions')

const dataPath = path.join(__dirname,'./subtitles')

const symbols = [
    '♪', '.', '-',',', '"',
    '_','<i>','</i>', '\r',
    '[',']','(',')','\n'
]

fn.readFolder(dataPath)
    .then(fn.elementsEndingWith('.srt'))
    .then(filesSRT => fn.readFiles(filesSRT))
    .then(fn.mixContent)
    .then(fn.separeteTextBy('\n'))
    .then(fn.removeIfEmpty)
    .then(fn.removeIfIncludes('-->'))
    .then(fn.removeLinesIfHaveOnlyNumbers)
    .then(fn.removeSymbols(symbols))
    .then(fn.mixContent)
    .then(fn.separeteTextBy(' '))
    .then(fn.removeIfEmpty)
    .then(fn.groupSameWords)
    .then(fn.orderByNumericAtribute('quantity', 'desc'))
    .then(console.log)

