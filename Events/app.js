// Import Event Emitters
const EventEmitter = require('events')

// Create an instance of eventEmitter
const emitter = new EventEmitter()
// 1. Define an Event Listner
// emitter.on("greet", () => {
//     console.log("grasiys pragyanam tiwari")
// })
// // 2. Trigger (emit ) the "greet" event
// emitter.emit('greet')

// 1. Define an Event Listner
emitter.on("greet", (arg) => {
    console.log(`Hello ${arg.name} are you a ${arg.prof}`)
})
// 2. Trigger (emit ) the "greet" event
emitter.emit('greet', { name: 'Pragyanam Tiwari', prof: 'MERN Developer' })


//! but it's best idea to take single argument as an object