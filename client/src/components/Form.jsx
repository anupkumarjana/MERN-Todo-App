import React from "react";
import { IoMdAdd } from "react-icons/io";


export default function Form({ input, setInput, addTodo }) {
  return (
    <div className="flex items-center justify-between">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="type here"
        className="border rounded px-5 py-2 text-slate-800"
      />
      <button
        className="border rounded mx-4 px-5 py-2 bg-blue-500 hover:-translate-y-1 ease-out duration-300"
        type="submit" onClick={(e)=>addTodo(e)}
      >
        <IoMdAdd />
      </button>
    </div>
  );
}
