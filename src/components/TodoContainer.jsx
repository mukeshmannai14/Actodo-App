import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function TodoContainer({
  activities,
  setActivities,
}) {

  return (
    <section className="bg-white rounded-3xl shadow-xl overflow-hidden">

      {/* HEADER */}

      <div className="px-6 py-6 border-b border-slate-100">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Today's Activity
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Plan your day and stay productive.
            </p>

          </div>


          <div className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl font-semibold">

            {activities.length}

            {" "}

            {activities.length === 1
              ? "Activity"
              : "Activities"}

          </div>

        </div>

      </div>


      {/* ADD FORM */}

      <div className="p-6 bg-slate-50">

        <AddTodoForm
          activities={activities}
          setActivities={setActivities}
        />

      </div>


      {/* LIST */}

      <div className="p-6">

        <TodoList
          activities={activities}
          setActivities={setActivities}
        />

      </div>

    </section>
  );
}

export default TodoContainer;