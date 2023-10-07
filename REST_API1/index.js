const express = require("express")
const fs = require("fs")
const fileData = require("./fakeData.json")

const app = express();
const PORT = 8000;




app.get("/", (req, res) => {
    res.send("HELLO from home (express)...")
})

// app.get("/users", (req, res) => {
//     // res.send("HELLO from home (express)...")
//     let tempHtml = `
//     <ul>
//     ${fileData.forEach()}
//     </ul>
//     `
//     res.json(fileData)
// })
app.get("/users", (req, res) => {
    // res.send("HELLO from home (express)...")
    let tempHtml = `<ol>${fileData.map((user) => `<li>${user.first_name} : ${user.email}</li>`).join(" ")}</ol>`
    res.send(tempHtml)
})




app.get("/api/users" , (req, res) => {
    res.json(fileData)
})
app.post("/api/users", (req, res) => {
    console.log("Insertion successful");
    res.send("Insertion successful");
})

app.get("/api/users/:id" , (req, res) => {
    let id = req.params.id;
    let thisUserData = fileData[id]
    res.json(thisUserData)
})





app.listen(PORT, ()=> {
    console.log(`Your server is running on PORT ${PORT} localhost:${PORT}`)
})










