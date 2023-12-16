import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    text: {
      type: String, // Change "String" to String
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true } // Correct key for enabling timestamps
);

const Todos = mongoose.model("todos", todoSchema);
export default Todos;
