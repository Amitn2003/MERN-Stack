const http = require("http")


const server = http.createServer((req,res) => {
    if (req.url == "/") {
        console.log(req.url);
        res.writeHead(210)
        res.end("Welcome to my website!! ");
    }
    else if (req.url == "/contact") {
        res.write("Welcome to contact us !!")
    }
    else {
        res.writeHead(404, {"Content-type": "text/html"})
        res.end("<h1>404 ERROR !!!! Page not found!!</h1>");
    }
    // res.end()
})


server.listen(9090, ()=> {
    console.log("Server is listening on port 9090")
})