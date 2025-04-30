const http = require('http')

// web server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('I am pragyanam tiwari bca only on somehing nstudent')
        res.end()
    }
})


const PORT = 3000
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})