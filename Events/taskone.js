const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');
const emitter = new EventEmitter();

const filePath = path.join(__dirname, 'eventCount.json');

// Load existing counts or initialize
let eventCount;
if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, 'utf8');
    eventCount = JSON.parse(raw);
} else {
    eventCount = {
        "user-login": 0,
        "user-logout": 0,
        "user-purchase": 0,
        "user-update": 0
    };
}

function saveCounts() {
    fs.writeFileSync(filePath, JSON.stringify(eventCount, null, 2), 'utf8');
}

emitter.on('user-login', (userName) => {
    eventCount['user-login']++;
    console.log(`${userName} is logged In`);
    saveCounts();
});

emitter.on('user-purchase', (userName, product) => {
    eventCount['user-purchase']++;
    console.log(`${userName} has purchased ${product}`);
    saveCounts();
});

emitter.on('user-update', (userName, mail) => {
    eventCount['user-update']++;
    console.log(`${userName} has updated his ${mail}`);
    saveCounts();
});

emitter.on('user-logout', (userName) => {
    eventCount['user-logout']++;
    console.log(`${userName} has logged out from site`);
    saveCounts();
});

emitter.on('summary', () => {
    console.log('Event Summary:', eventCount);
});

// Emit events
emitter.emit('user-login', 'pragyanam');
emitter.emit('user-purchase', 'pragyanam', 'laptop');
emitter.emit('user-update', 'pragyanam', 'email');
emitter.emit('user-logout', 'pragyanam');
emitter.emit('summary');
