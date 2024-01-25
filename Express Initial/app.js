const express = require("express");
const app = express();





app.get("/", (req, res) => {
    res.send("Welcome to the home page")
})


app.get("/about", (req, res) => {
    res.send("Welcome to the about us page")
})
app.get("/contact", (req, res) => {
    res.send("Welcome to the contact us page")
})
app.get("/temp", (req, res) => {
    // res.status(400)
    res.write("<h1>Welcome to the temparature page!!</h1>");
    res.send()
})

app.get("/api", (req, res) => {
    // res.status(400)
    res.send({
        id: 45345,
        name : "Amit Naskar",
        college: "Seacom"
    })
    // res.send({
    //           "_id": "658d7ba0666541bff8237f4c",
    //           "index": 0,
    //           "isActive": true,
    //           "age": 38,
    //           "name": "Benita Quinn",
    //           "gender": "female",
    //           "company": "SONGLINES",
    //           "email": "benitaquinn@songlines.com",
    //           "phone": "+1 (818) 442-3562",
    //           "address": "873 Malbone Street, Bagtown, Idaho, 4359"
    //         })
})


app.listen(9090, () => {
    console.log("Server is running on port 9090")
})