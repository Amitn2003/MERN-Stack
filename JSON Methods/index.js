const http = require("http")
const fs = require("fs")


let fileData = ""

fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        // console.log("Data is...")
        // console.log(data)
        fileData = data
    }
})




const server = http.createServer((req, res) => {
    if (req.url == "/") {
        // console.log(a)
        res.end("Welcome to home page !!");
    }
    else if (req.url == "/api" ) {
        console.log(fileData)
        res.writeHead(200, {"content-type": "application/json"})
        // res.end("API page");

        res.end(fileData);
    }
    else {
        res.end("404 ERROR PAGE !!");
        res.writeHead(404, {"content-type" : "application/json"});
    }
})


server.listen(9090, (err) => {
    console.log("Server is listening on port 9090")
})








