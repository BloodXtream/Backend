const os = require('os')


console.log(`Platform: ${os.platform()}`)
// console.log(`User: ${os.userInfo()}`)
console.log(`cpu artitecture: ${os.arch()}`)
console.log(`Free Memory: ${os.freemem()}, bytes`)
console.log(`toal Memory: ${os.totalmem()}, bytes`)
console.log(`system uptime: ${os.uptime()}, sec`)
console.log(`OS type: ${os.type()}`)