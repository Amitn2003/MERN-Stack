const fs = require("fs")



// fs.mkdir("notes", (err)=> {
//     console.log("Directory created successfully")
// })


// fs.writeFile("./notes/a.txt", "Hello world!!", (e) => {
//     console.log("File creation successful")
//     console.log(e)
// })

fs.readFile("notes/a.txt", "utf-8", (e, data) => {
    console.log(data)
})


console.log("I'm last")

fs.appendFile("notes/a.txt","new data", (err) => {
    console.log("Append successful")
    console.log(err)
})