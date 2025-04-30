const { appendFile } = require('fs')
const fs = require('fs/promises')
const path = require('path')

const fileName = 'something.txt'
const filePath = path.join(__dirname, fileName)

// const newfile = __dirname

// const readFolder = async () => {
//     try {
//         const res = await fs.readdir(newfile)
//         console.log(res)
//     } catch (err) {
//         console.error(err)
//     }
// }

// readFolder()

const writeFileExample = async () => {
    try {
        await fs.writeFile(filePath,
            'this is new file with this inital content',
            'utf8'
        )
        console.log('Files Created Succesfully')
    } catch (err) {
        console.error(err)
    }
}
const appendFileExample = async () => {
    try {
        await fs.appendFile(filePath,
            '\n this is new updated texxt in file',
            'utf8'
        )
        console.log('Succesfully Appedned...!')
    } catch (err) {
        console.error(err)
    }

}
const readFileExample = async () => {
    try {
        const res = await fs.readFile(filePath, 'utf8')
        console.log(`${res} Reading done...!`)
    } catch (err) {
        console.error(err)
    }
}
const deleteFileExample = async () => {
    try {
        fs.unlink(filePath)
        console.log('file Deleted SuccesFully')
    } catch (err) {
        console.error(err)
    }
}

writeFileExample()
appendFileExample()
readFileExample()
deleteFileExample()