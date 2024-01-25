const http = require("http")
const fs = require("fs")




const server = http.createServer((req, res) => {
    const rstream = fs.createReadStream("myData.txt")
    rstream.pipe(res)
    // res.end()
})

server.listen(9090, () => {
    console.log("Server is running on port 9090")
})