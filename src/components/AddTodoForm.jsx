import { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const text = todoText.trim();

    if (text === "") {
      return;
    }

    addTodo(text);
    setTodoText("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >

      <input
        type="text"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        placeholder="Enter your activity..."
        className="flex-1 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30"
      />

      <button
        type="submit"
        className="rounded-2xl bg-indigo-600 px-7 py-3 font-semibold text-white transition hover:bg-indigo-500 active:scale-95"
      >
        + Add Activity
      </button>

    </form>
  );
}

export default AddTodoForm;