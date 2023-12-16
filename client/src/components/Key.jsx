import React from "react";

export default function Key() {
  return (
    <ul className="flex justify-between text-sm border p-2 rounded">
      <li className="text-red-500">Completed</li>
      <li className="text-slate-700">Not Completed</li>
    </ul>
  );
}
