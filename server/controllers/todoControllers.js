import mongoose from "mongoose";
import Todos from "../todosDB.js";

export const getTodos = async (req, res) => {
  try {
    const allTodos = await Todos.find().sort({ createdAt: -1 });
    res.status(200).send(allTodos);
  } catch (err) {
    res.status(400).send(err.message);
    console.log(err.message);
  }
};

export const postTodo = async (req, res) => {
  const dbTodo = req.body;

  try {
    const newTodo = await Todos.create(dbTodo);
    res.status(201).send(newTodo);
  } catch (err) {
    if (err.code === 11000 && err.keyPattern && err.keyPattern._id) {
      // Handle duplicate _id error
      return res
        .status(409)
        .send("This ID already exists. Choose a different ID.");
      // 409 (Conflict) status code indicates that the request could not be completed due to a conflict with the current state of the target resource
    } else {
      // Handle other errors
      return res.status(500).send(err.message);
    }
    // console.log(err.message);
  }
};



export const putTodo = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // Validate the ID
      return res.status(404).send(`There is no todo with the id: ${id}`);
    }
    const todoId = { _id: id };
    const update = { completed: true };

    const updatedTodo = await Todos.findOneAndUpdate(todoId, update, {
      new: true,
    }); // Retrieve the updated todo
    if (!updatedTodo) {
      return res.status(404).send(`There is no todo with the id: ${id}`);
    }

    res.status(200).send(updatedTodo);
  } catch (err) {
    res.status(400).send(err.message);
    console.log(err.message);
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      // Validate the ID
      return res.status(404).send(`There is no todo with the id: ${id}`);
    }
    const deletedTodo = await Todos.findOneAndDelete({ _id: id });
    res.status(200).send(deletedTodo);
  } catch (err) {
    res.status(400).send(err.message);
    console.log(err.message);
  }
};
