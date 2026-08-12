import TodoItem from "./TodoItem";

function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
}) {
  if (todos.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 py-12 text-center">

        <div className="text-5xl">
          📝
        </div>

        <h3 className="mt-4 text-lg font-semibold text-white">
          No activities yet
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Add your first activity above.
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-3">

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}

    </div>
  );
}

export default TodoList;