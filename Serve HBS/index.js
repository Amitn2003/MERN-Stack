const express = require("express")
const hbs = require("hbs")
const path = require("path")

const PORT = 9090;

const app = express();

console.log(path.join(__dirname, "..", "/templates"))

// console.log(path.join(__dirname))
const staticPath = path.join(__dirname, "..", "/templates")
const templatePath = path.join(__dirname, "/templates/views")
const partialPath = path.join(__dirname, "/templates/partials")

hbs.registerPartials(partialPath)

app.use(express.static(staticPath))
app.set("view engine", "hbs");
app.set("views", templatePath )
app.get("" , (req, res) => {
    res.render("index", { 
        myName : "Amit"
    }) 
    // res.send("This is the home page");
})


app.listen(PORT, ()=>{
    console.log(`The server is running on http://127.0.0.1:${PORT} `)
})