import React from "react";
// import { IoCloseSharp } from "react-icons/io5";
import { instance } from "../axios";
import { MdDelete } from "react-icons/md";

export default function TodoList({ todos, fetchData }) {

  const handleUpdateTodo = async (id, completed) => {
    try {
      const updatedTodos = todos.map(todo =>
        todo._id === id ? { ...todo, completed: !completed } : todo
      );
      await instance.put(`/todos/${id}`, {
        id,
        completed: !completed,
      });
      fetchData(updatedTodos); // Pass updated todos to the parent component
    } catch (err) {
      console.log(err.message);
    }
  };

  const handledeleteTodo = async (id) => {
    try {
      await instance.delete(`/todos/${id}`, {
        id,
      });
      fetchData(); // Pass updated todos to the parent component
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex text-slate-900 py-4 flex-wrap">
      <ul className="flex flex-col gap-3">
        {todos?.map((todo) => {
          const textClasses = todo.completed
            ? "text-lg text-red-500 line-through"
            : "text-lg text-slate-800";

          return (
            <li
              key={todo._id}
              className="w-full flex justify-between items-center gap-40"
            >
              <p className={textClasses}>{todo.text}</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleUpdateTodo(todo._id, todo.completed)}
                  isCompleted={todo.completed} className="text-sm"
                >
                  Done
                </button>
                <button onClick={()=>handledeleteTodo(todo._id)}>
                  <MdDelete />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
