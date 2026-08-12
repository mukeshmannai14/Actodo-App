function TodoItem({
  todo,
  deleteTodo,
  toggleTodo,
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4">

      <div className="flex min-w-0 items-center gap-3">

        <button
          type="button"
          onClick={() => toggleTodo(todo.id)}
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${
            todo.completed
              ? "border-emerald-500 bg-emerald-500"
              : "border-slate-500"
          }`}
        >
          {todo.completed && (
            <span className="font-bold text-white">
              ✓
            </span>
          )}
        </button>

        <span
          className={`truncate ${
            todo.completed
              ? "text-slate-500 line-through"
              : "text-white"
          }`}
        >
          {todo.title}
        </span>

      </div>

      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="rounded-xl px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10"
      >
        Delete
      </button>

    </div>
  );
}

export default TodoItem;