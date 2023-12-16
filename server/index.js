import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import dotenv from "dotenv";

import {
  getTodos,
  postTodo,
  putTodo,
  deleteTodo,
} from "./controllers/todoControllers.js";


//app config
const app = express();
dotenv.config();
const connectionURL = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

//middleware
//coversion to json
app.use(express.json());
app.use(Cors());

//DB config

mongoose
  .connect(connectionURL)
  .then(() => {
    app.listen(port, () => {
      console.log(`server is runnig on port: ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//API endpoints

//get todo lis

app.get("/todos", getTodos);

//create a new todo
app.post("/todos", postTodo);

//update todo
app.put("/todos/:id", putTodo);

//delete todo
app.delete("/todos/:id", deleteTodo);
