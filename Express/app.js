import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

const app = express()
dotenv.config()


// app - This variable holds the created Express app which we can use to :

// Define ROUTES: (app.get(), app.post()...etc)
// configure MIDDLEWARE: (app.use())
// start the server: (app.listen())

// absollute path
const staticPath = path.join(import.meta.dirname, "public")
app.use(express.static(staticPath))

app.get('/product', (req, res) => {
    // console.log(req.query)
    res.send(`<h1>User Search For ${req.query.search} Phone and its cost is ${req.query.price}</h1>`)
})

app.get('/profile/:username', (req, res) => {
    res.send(`<h1>My userName is ${req.params.username}</h1>`)
})
app.get('/profile/:username/article/:slug', (req, res) => {
    // console.log(req.params)
    const formattedSlug = req.params.slug.replace(/-/g, " ")
    res.send(`<h1>My userName is ${req.params.username} and i have written this ${formattedSlug} Articel</h1>`)
})


const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})