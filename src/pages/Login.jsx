import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({ users, setLoggedUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();

    const foundUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );

    if (foundUser) {
      setLoggedUser(foundUser);
      setError("");

      navigate("/Landing");
    } else {
      setError("Invalid username or password");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-4">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

        <div className="mb-8 text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-4xl text-white">
            ✓
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            Actodo
          </h1>

          <p className="text-slate-500">
            Manage your daily activities
          </p>

        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          Welcome back 👋
        </h2>

        <p className="mt-1 text-slate-500">
          Login to continue to your dashboard.
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-4"
        >

          <div>
            <label className="mb-1 block font-semibold text-slate-700">
              Username
            </label>

            <input
              type="text"
              value={username}
              onChange={(event) =>
                setUsername(event.target.value)
              }
              placeholder="Enter your username"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold text-slate-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-red-50 p-3 text-center text-sm font-medium text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3 font-bold text-white transition hover:bg-indigo-700"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/Signup"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Sign up
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;