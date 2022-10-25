const path = require('path')
const fn = require('./functions')

const dataPath = path.join(__dirname,'./subtitles')

fn.readFolder(dataPath)
    .then(pathFiles => fn.elementsEndingWith(pathFiles, '.srt'))
    .then(filesSRT => fn.readFiles(filesSRT))
    .then(contents => contents.join('\n'))
    .then(allContent => allContent.split('\n'))
    .then(lines => fn.removeIfEmpty(lines))
    .then(lines => fn.removeIfIncludes(lines, '-->'))
    .then(console.log)

