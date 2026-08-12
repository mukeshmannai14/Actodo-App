import { useEffect, useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

function Landing({ user }) {
  const [todos, setTodos] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Live time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const time = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const pendingTasks = todos.length - completedTasks;

  function addTodo(title) {
    setTodos((previousTodos) => [
      ...previousTodos,
      {
        id: Date.now(),
        title: title,
        completed: false,
      },
    ]);
  }

  function deleteTodo(id) {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== id)
    );
  }

  function toggleTodo(id) {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">

      {/* Header */}
      <header className="border-b border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">

          <div>
            <h1 className="text-2xl font-bold text-white">
              ✓ Actodo
            </h1>

            <p className="text-sm text-slate-400">
              Manage your daily activities
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-slate-400">
              Welcome
            </p>

            <p className="font-semibold text-white">
              {user?.username || "User"} 👋
            </p>
          </div>

        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-5 py-8">

        {/* Welcome */}
        <section className="mb-8">
          <p className="text-sm font-medium text-indigo-400">
            {date}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Good to see you, {user?.username || "User"}!
          </h2>

          <p className="mt-2 text-slate-400">
            Let's get your activities organized for today.
          </p>
        </section>

        {/* Time and Date */}
        <section className="mb-8 grid gap-5 md:grid-cols-2">

          {/* Time */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-lg">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl">
                🕐
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Current Time
                </p>

                <h3 className="text-2xl font-bold text-white">
                  {time}
                </h3>
              </div>

            </div>

          </div>

          {/* Date */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-lg">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-2xl">
                📅
              </div>

              <div>
                <p className="text-sm text-slate-400">
                  Today's Date
                </p>

                <h3 className="text-lg font-bold text-white">
                  {date}
                </h3>
              </div>

            </div>

          </div>

        </section>

        {/* Statistics */}
        <section className="mb-8 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg">
            <p className="text-sm text-slate-400">
              Total Activities
            </p>

            <p className="mt-2 text-3xl font-bold text-white">
              {todos.length}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg">
            <p className="text-sm text-slate-400">
              Pending
            </p>

            <p className="mt-2 text-3xl font-bold text-yellow-400">
              {pendingTasks}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg">
            <p className="text-sm text-slate-400">
              Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-emerald-400">
              {completedTasks}
            </p>
          </div>

        </section>

        {/* Add Activity */}
        <section className="mb-8 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-lg">

          <h2 className="text-xl font-bold text-white">
            Add Today's Activity ✨
          </h2>

          <p className="mb-5 mt-1 text-sm text-slate-400">
            Add something you want to accomplish today.
          </p>

          <AddTodoForm addTodo={addTodo} />

        </section>

        {/* Activities */}
        <section className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-lg">

          <div className="mb-5">

            <h2 className="text-xl font-bold text-white">
              Today's Activities
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              {todos.length === 0
                ? "You haven't added any activities yet."
                : `${todos.length} activities added`}
            </p>

          </div>

          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />

        </section>

      </main>

    </div>
  );
}

export default Landing;