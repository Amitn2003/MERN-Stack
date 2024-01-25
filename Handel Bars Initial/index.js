const express = require("express")
const path = require("path")
const PORT = 9090

const app = express();


app.set("view engine" , "hbs");


app.get("" , (req, res) => {
    res.render("index")
})


app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT} `)
})