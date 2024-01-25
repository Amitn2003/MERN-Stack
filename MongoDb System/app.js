import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {Todo} from "./modules/todo.js";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

let conn = await mongoose.connect("mongodb+srv://Amit:%40mit1234@sigmacluster.zcraf5l.mongodb.net/todo")









app.get("/", async (req, res) =>  {
    const myTodo = await new Todo({title: "Talk", desc: "Anything", isDone: false})
    await myTodo.save()
    await res.send("HEllo")
})
app.get("/data/" , async (req, res) => {
    let myTodo = await Todo.find({})
    console.log(myTodo)
    res.json(myTodo)
    // res.send("Saved")
})
app.listen(PORT, ()=>{
    console.log(`Server is running visit http://localhost:${PORT} `)
})


