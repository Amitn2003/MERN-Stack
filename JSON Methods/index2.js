const fs = require("fs")


const myData = {
    name : "Amit Naskar",
    age : 20,
    course : "BCA"
};
console.log(myData.course)


let jsonData = JSON.stringify(myData);

fs.writeFile("myData.txt", jsonData, () => {
    console.log("Data saved successfully!!")
})
console.log(jsonData)
// console.log(jsonData.name)       //does not work

let originalData = JSON.parse(jsonData);


console.log(originalData)
console.log(originalData.course)


