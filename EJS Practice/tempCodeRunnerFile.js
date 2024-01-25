import express from "express";


const app = express();

app.get("/", (req, res)=> {
    res.send("Hello !")
})


app.listen(8080, () => {
    console.log("App is on https://127.0.0.1:8080 ...")
})