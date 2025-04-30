const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./models/user')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render("index.ejs")
})

app.get('/read', async (req, res) => {
    let users= await userModel.find()
    res.render("read.ejs",{users})      // {users: users}
})

app.get('/edit/:id', async (req, res) => {
    let users = await userModel.findOne({ _id: req.params.id })  // {users: users}
    res.render("edit.ejs", { users })
})

app.post('/update/:id', async (req, res) => {
    let { name, email, image } = req.body
    let users = await userModel.findOneAndUpdate(
        { _id: req.params.id },
        { image, name, email },
        { new: true }
    )  
    res.redirect("/read")
})

app.get('/delete/:id', async (req, res) => {
    let users= await userModel.findOneAndDelete({_id: req.params.id})
    res.redirect("/read")      // {users: users}
})

app.post('/create', async (req, res) => {
    let { name, email, image } = req.body
    let createdUser = await userModel.create({
        name,                // name: name,
        email,                // email: email,
        image                // image: image
    })

    res.redirect('/read')
})

app.listen(3000)
