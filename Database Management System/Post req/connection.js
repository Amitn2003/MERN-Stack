const mysql = require("mysql")

const con = mysql.createConnection({
    user: "root",
    database : "a",
    password: "@mIt1234",
    host: "localhost"
})

con.connect((err) => {
    if (err) throw err;
    console.log(`Connection has been established successfully...`)
})

module.exports = con;