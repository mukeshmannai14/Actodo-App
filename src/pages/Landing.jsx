import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

function Landing({ user, setLoggedUser }) {
  const navigate = useNavigate();

  // Todo state
  const [todos, setTodos] = useState([]);

  // Current time state
  const [currentTime, setCurrentTime] = useState(new Date());

  // --------------------------------
  // LIVE DATE & TIME
  // --------------------------------

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // --------------------------------
  // DATE
  // --------------------------------

  const date = currentTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // --------------------------------
  // TIME
  // --------------------------------

  const time = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  // --------------------------------
  // TODO STATISTICS
  // --------------------------------

  const totalTasks = todos.length;

  const completedTasks = todos.filter(
    (todo) => todo.completed
  ).length;

  const pendingTasks = todos.filter(
    (todo) => !todo.completed
  ).length;

  // --------------------------------
  // ADD TODO
  // --------------------------------

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTodos((previousTodos) => [
      ...previousTodos,
      newTodo,
    ]);
  }

  // --------------------------------
  // DELETE TODO
  // --------------------------------

  function deleteTodo(id) {
    setTodos((previousTodos) =>
      previousTodos.filter(
        (todo) => todo.id !== id
      )
    );
  }

  // --------------------------------
  // COMPLETE TODO
  // --------------------------------

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

  // --------------------------------
  // LOGOUT
  // --------------------------------

  function handleLogout() {
    setLoggedUser(null);
    navigate("/");
  }

  // --------------------------------
  // USER INITIAL
  // --------------------------------

  const username = user?.username || "User";

  const userInitial = username
    .charAt(0)
    .toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          {/* LOGO */}

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white shadow-lg shadow-indigo-600/30">
              ✓
            </div>

            <div>
              <h1 className="text-xl font-bold text-white">
                Actodo
              </h1>

              <p className="hidden text-xs text-slate-400 sm:block">
                Manage your daily activities
              </p>
            </div>

          </div>

          {/* USER SECTION */}

          <div className="flex items-center gap-3">

            {/* USER NAME */}

            <div className="hidden text-right sm:block">

              <p className="text-xs text-slate-400">
                Welcome
              </p>

              <p className="font-semibold text-white">
                {username} 👋
              </p>

            </div>

            {/* USER AVATAR */}

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
              {userInitial}
            </div>

            {/* LOGOUT */}

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition-all duration-200 hover:bg-red-500 hover:text-white active:scale-95"
            >
              Logout
            </button>

          </div>

        </div>

      </header>


      {/* =========================================
          MAIN
      ========================================= */}

      <main className="mx-auto max-w-7xl px-5 py-8">

        {/* =====================================
            WELCOME SECTION
        ===================================== */}

        <section className="mb-8">

          <p className="text-sm font-medium text-indigo-400">
            {date}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Good to see you, {username}! 👋
          </h2>

          <p className="mt-2 max-w-2xl text-slate-400">
            Stay organized, manage your activities,
            and make today productive.
          </p>

        </section>


        {/* =====================================
            TIME / DATE / TECHNOLOGY
        ===================================== */}

        <section className="mb-8 grid gap-5 md:grid-cols-3">

          {/* ================= TIME CARD ================= */}

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-2xl shadow-lg shadow-indigo-600/20">
                🕐
              </div>

              <div className="min-w-0">

                <p className="text-sm text-slate-400">
                  Current Time
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  {time}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Live time
                </p>

              </div>

            </div>

          </div>


          {/* ================= DATE CARD ================= */}

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-2xl shadow-lg shadow-emerald-600/20">
                📅
              </div>

              <div className="min-w-0">

                <p className="text-sm text-slate-400">
                  Today's Date
                </p>

                <h3 className="mt-1 text-base font-bold text-white sm:text-lg">
                  {date}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Current date
                </p>

              </div>

            </div>

          </div>


          {/* ================= TECHNOLOGY CARD ================= */}

          <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/15">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-600 text-2xl shadow-lg shadow-pink-600/20">
                💻
              </div>

              <div className="min-w-0">

                <p className="text-sm text-slate-400">
                  Built With
                </p>

                <h3 className="mt-1 text-base font-bold text-white sm:text-lg">
                  React + Tailwind CSS
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Modern & Responsive
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            ACTIVITY STATISTICS
        ===================================== */}

        <section className="mb-8 grid gap-4 sm:grid-cols-3">

          {/* TOTAL */}

          <div className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg transition-all hover:bg-white/15">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  Total Activities
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  {totalTasks}
                </p>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/20 text-xl">
                📋
              </div>

            </div>

          </div>


          {/* PENDING */}

          <div className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg transition-all hover:bg-white/15">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  Pending
                </p>

                <p className="mt-2 text-3xl font-bold text-yellow-400">
                  {pendingTasks}
                </p>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20 text-xl">
                ⏳
              </div>

            </div>

          </div>


          {/* COMPLETED */}

          <div className="group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-lg transition-all hover:bg-white/15">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  Completed
                </p>

                <p className="mt-2 text-3xl font-bold text-emerald-400">
                  {completedTasks}
                </p>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-xl">
                ✓
              </div>

            </div>

          </div>

        </section>


        {/* =====================================
            ADD TODO FORM
        ===================================== */}

        <section className="mb-8 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-lg">

          <div className="mb-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg">
                +
              </div>

              <div>

                <h2 className="text-xl font-bold text-white">
                  Add Today's Activity
                </h2>

                <p className="text-sm text-slate-400">
                  Add something you want to accomplish today.
                </p>

              </div>

            </div>

          </div>

          <AddTodoForm addTodo={addTodo} />

        </section>


        {/* =====================================
            TODO LIST
        ===================================== */}

        <section className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-lg">

          {/* LIST HEADER */}

          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

            <div>

              <h2 className="text-xl font-bold text-white">
                Today's Activities
              </h2>

              <p className="mt-1 text-sm text-slate-400">

                {todos.length === 0
                  ? "You haven't added any activities yet."
                  : `${todos.length} ${
                      todos.length === 1
                        ? "activity"
                        : "activities"
                    } added.`}

              </p>

            </div>

            {/* ACTIVITY COUNT */}

            <div className="w-fit rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              {completedTasks}/{totalTasks} completed
            </div>

          </div>


          {/* TODO LIST */}

          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />

        </section>


        {/* =====================================
            FOOTER
        ===================================== */}

        <footer className="mt-10 pb-5 text-center">

          <div className="mx-auto h-px max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="mt-6 text-sm text-slate-400">
            Made with{" "}
            <span className="font-semibold text-cyan-400">
              React
            </span>{" "}
            &{" "}
            <span className="font-semibold text-sky-400">
              Tailwind CSS
            </span>{" "}
            ❤️
          </p>

          <p className="mt-2 text-xs text-slate-600">
            © {new Date().getFullYear()} Actodo. All rights reserved.
          </p>

        </footer>

      </main>

    </div>
  );
}

export default Landing;