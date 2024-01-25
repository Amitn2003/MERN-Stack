const http = require("http")


const server = http.createServer((req, res) => {
    res.end("This is a sample test web page")
})


server.listen(8080, "localhost", () => {
    console.log("Server is running on localhost:8080")
})