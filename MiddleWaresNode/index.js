const express = require("express");
const app = express();

const PORT = 8000;

// Middleware
// every request passes through middleware ( and middleware can pass to next middleware/route or rend response) - Example : check req header & Prevent hacker
app.use(function (req, res, next) {
  console.log("A new request came & Everything is OK");
  next();
});










app.get("/", (req, res) => {
  res.send("Welcome to Home Page...");
});






app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.0.1:${8000}.`);
});
