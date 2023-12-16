import React, { useEffect, useState } from "react";
import Form from "./Form";
import { instance } from "../axios";
import TodoList from "./TodoList";
import Key from "./Key";
// import { instance } from "../axios";

export default function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  // console.log(input);
  const fetchData = async () => {
    try {
      const response = await instance.get("/todos");
      setTodos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (input.length === 0) {
      return null;
    }
    await instance.post("/todos", [
      {
        ...todos,
        text: input,
        completed: false,
      },
    ]);

    fetchData();
    setInput("");
    console.log("addTodo");
  };
  // console.log(todos);
  return (
    <div className="flex flex-col gap-4 ">
      <h2>Today's tasks</h2>
      <Form input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} fetchData={fetchData}/>
      <Key/>
    </div>
  );
}
