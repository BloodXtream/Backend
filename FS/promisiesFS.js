const fs = require('fs')
// if we require this --> fs/promises  then we don't have to use fs.promises everywhere it will help not to repeat the
const path = require('path')

const fileName = 'fsPromisies.txt'
const filePath = path.join(__dirname, fileName)

const newFileName = ' newpromise.txt'
const newFilePath = path.join(__dirname, newFileName)

fs.promises.writeFile(filePath, 'its is new file', 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.error(err))

fs.promises.appendFile(filePath, '\nits an updated file with some new contenet', 'utf8')
    .then(console.log('Added new content'))
    .catch((err) => console.error(err))

fs.promises.readFile(filePath, 'utf8')
    .then(console.log('Reading compleated'))
    .catch((err) => console.error(err))

fs.promises.rename(filePath, newFilePath)
    .then(console.log('file is Renamed'))
    .catch((err) => console.error(err))

fs.promises.unlink(newFilePath)
    .then(console.log('File dlted succesfully'))
    .catch((err) => console.error(err))