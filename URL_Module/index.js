const express = require("express");
const app = express();
const PORT = 8000;
// const url = require('url')
// const fs = require('fs')

let requestCount = 0;

app.use(function (req, res, next) {
  // console.log("HELLO from MIDDLEWIRE")
  requestCount++;
  next();
});

app.get("", (req, res) => {
  // fs.appendFile("log.txt", JSON.stringify(url) + "\n", ()=> {
  //   console.log("File saved successfully...")
  // })
  // console.log(url)
  res.send(
    "Hello from Express server!!!!!!!!!!! Total request = " + requestCount
  );
});

app.get("/about", (req, res) => {
  console.log(url)
  res.send("Hello from about.");
});

app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT} .`);
});
