import Todo from "./components/Todo.jsx";
function App() {
  return (
    <div className="bg-slate-800 h-[100vh] w-full flex flex-col items-center py-10 gap-4 text-slate-800">
      <h1 className="text-white text-2xl p-6">Notify</h1>
      <div className="bg-white px-8 py-4 rounded text-lg flex gap-4">
        <Todo />
      </div>
    </div>
  );
}

export default App;
