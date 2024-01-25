const con = require("./connection");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// const app = express()

app.set("view engine", "ejs");

const staticPath = path.join(__dirname);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("./index.html");
  // res.send("index.html")
});
app.post("/", (req, res) => {
  console.log("Got body:", req.body);
  // res.sendStatus(200);
  // con.connect((err) => {
  console.log(req.body.name);
  let inputName = req.body.name;
  let inputEmail = req.body.email;
  let inputNo = req.body.no;
  let randomNum = Math.floor(Math.random() * 101) + 5;
  // let sql = `INSERT INTO studentNode(id, name, email, phone) VALUES(${randomNum}, "${inputName}" , "${inputEmail}", "${inputNo}");`
  let sql = `INSERT INTO studentNode(name, email, phone) VALUES("${inputName}" , "${inputEmail}", "${inputNo}");`;
  con.query(sql, (err, result) => {
    console.log("INSERTIONING?????");
    console.log(sql);
    if (err) throw err;
    console.log("Insertion successfull");
    // res.send(`Insertion successfull id is ${result.insertId}`)
    res.redirect("/students");
  });
  // res.send(__dirname + "index.html")
});

app.get("/students", (req, res) => {
  let sql = "select * from studentNode";
  con.query(sql, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    // res.send("HELLO")
    res.render(path.join(__dirname, "index-ejs"), { students: result });
  });
});

app.get("/delete-student", (req, res) => {
  let id = req.query.id;
  let sql = `delete from studentNode where id = ${id}`;
  con.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.redirect("/students");
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
