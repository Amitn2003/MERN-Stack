const fs = require("fs");

// fs.writeFileSync("temp.txt", "Hello")

// fs.renameSync("temp.txt", "temp2.txt")

// fs.appendFileSync("temp2.txt", "\nHello everyone welcome to coding world")

data = fs.readFileSync("temp2.txt", "UTF-8");
data2 = fs.readFileSync("temp2.txt"); // gives buffer data

console.log(data);

console.log(data2.toString());
