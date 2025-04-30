const { isUtf8 } = require('buffer')
const fs = require('fs')
const path = require('path')

const fileName = "fsAsync.txt"
const filePath = path.join(__dirname, fileName)

fs.writeFile(filePath, 'this is th initial content', 'utf8', (err) => {
    if (err) console.error("error")
    else console.log('file Saved')
})


fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) console.error('error')
    else console.log(data)
})

fs.appendFile(fileName, '\nThis is the updated content', (err) => {
    if (err) console.error('error')
    else console.log('done')
})

const newFileName = 'updatedfsAsync.txt'
const newPath = path.join(__dirname, newFileName)
fs.rename(filePath, newPath, (err) => {
    if (err) console.error('err')
})

fs.unlink(fileName, (err) => {
    if (err) console.error("err")
})