const fs = require('fs')
const path = require('path')
const eventEmitter = require('events')
const emitter = new eventEmitter()
const fileName = 'evntcnt.json'
const filePath = path.join(__dirname, fileName)

let eventCount
if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf8')   // String data 
    eventCount = JSON.parse(raw)
} else {
    eventCount = {
        "user-login": 0,
        "user-logout": 0,
        "user-purchase": 0,
        "user-update": 0,
    }
}

function saveCounts() {
    fs.writeFileSync(filePath, JSON.stringify(eventCount, null, 2), 'utf8')
}

emitter.on('user-login', (userName) => {
    eventCount['user-login']++
    console.log(`${userName} is logged In`)
    saveCounts()
})

emitter.on('user-purchase', (userName, product) => {
    eventCount['user-purchase']++
    console.log(`${userName} has purchase this ${product}`)
    saveCounts()
})

emitter.on('user-update', (userName, mail) => {
    eventCount['user-update']++
    console.log(`${userName} has updated his ${mail}`)
    saveCounts()
})

emitter.on('user-logout', (userName) => {
    eventCount['user-logout']++
    console.log(`${userName} has logout form site`)
    saveCounts()
})

emitter.on('summary', () => {
    console.log(eventCount)
    saveCounts()
})
// Emit events
emitter.emit('user-login', 'pragyanam')
emitter.emit('user-purchase', 'pragyanam', 'laptop')
emitter.emit('user-update', 'pragyanam', 'email')
emitter.emit('user-logout', 'pragyanam')
// Summary
emitter.emit('summary')