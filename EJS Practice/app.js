import express from "express";


const app = express();


app.set("view engine", "ejs")

app.use(express.static("views"))



// let  a = ""

// a.startsWith("Amit")

app.get("/", (req, res)=> {
    res.render("index.ejs", {name : "Amit Naskar"});
})













app.listen(8080, () => {
    console.log("App is on https://127.0.0.1:8080 ...")
})