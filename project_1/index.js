const path = require('path')
const fn = require('./functions')

const dataPath = path.join(__dirname,'./subtitles')

fn.readFolder(dataPath)
    .then(files => fn.elementsEndingWith(files, '.srt'))
    .then(console.log)

