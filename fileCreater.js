import fs from 'fs'
import Readline from 'readline'

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const fileCreation = () => {
    rl.question('Enter Your file name: ', (fileName) => {
        rl.question('Enter the Content for your file: ', (content) => {
            fs.writeFile(`${fileName}.txt`, content, (err) => {
                if (err) console.error(`Error while writing the file: ${err.message}`)
                else console.log(`${fileName}.txt Created Succesfully...`)
                rl.close()
            })
        })
    })
}
fileCreation()
