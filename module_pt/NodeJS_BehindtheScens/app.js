const fs = require('fs')
console.log('start')

// syncronus Task

// synchronus Task

// Async Task
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err
    else console.log(data)
})


const data = fs.readFileSync('file.txt', 'utf8')
console.log(`Sync: ${data}`)

console.log('end')