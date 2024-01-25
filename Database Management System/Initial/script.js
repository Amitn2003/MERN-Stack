const mysql = require("mysql")

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@mIt1234",
    database: "a"
})

con.connect((err)=> {
    // if (err) throw Error("ERROR!!!!");
    if (err) 
       throw err;
    console.log("Connection has been established!!!!!");
})

let temp = con.query("select * from students", (err, data) => {
    if (err) throw err;
    // console.log(data)
    for (let i =0; i<data.length; i++) {
        console.log(`Name is ${data[i].name}, roll is ${data[i].roll} marks : ${data[i].marks} address : ${data[i].address}`)
    }
})
// console.log(temp)