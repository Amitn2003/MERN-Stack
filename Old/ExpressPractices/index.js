const express = require("express");
const app = express();
const PORT = 8000;
// const fs = require("fs")
// fs.writeFileSync(".gitignore", "node_module")

let requestCount = 0;

app.use(function (req, res, next) {
  // console.log("HELLO from MIDDLEWIRE")
  requestCount++;
  next();
});

app.get("", (req, res) => {
  res.send(
    "Hello from Express server!!!!!!!!!!! Total request = " + requestCount
  );
});

app.get("/about", (req, res) => {
  res.send("Hello from about.");
});

app.listen(PORT, () => {
  console.log(`The server is running on PORT ${PORT} .`);
});
