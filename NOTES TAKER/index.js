const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => {
        res.render("index", { files: files });
    });
});

app.get("/files/:filesName", (req, res) => {
    fs.readFile(`./files/${req.params.filesName}`, "utf8", (err, filedata) => {
        res.render('show', { filesName: req.params.filesName, filedata: filedata });
    });
});

app.post("/create", (req, res) => {
    const fileName = req.body.title.split(' ').join('') + ".txt";
    fs.writeFile(`./files/${fileName}`, req.body.details, (err) => {
        res.redirect("/");
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
