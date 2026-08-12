import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup({ users, setUsers }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSignup(event) {
    event.preventDefault();

    setError("");

    if (
      !username.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const existingUser = users.find(
      (user) =>
        user.username.toLowerCase() ===
        username.trim().toLowerCase()
    );

    if (existingUser) {
      setError("Username already exists.");
      return;
    }

    const newUser = {
      username: username.trim(),
      password: password,
    };

    setUsers([...users, newUser]);

    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex items-center justify-center p-5">

      <div className="w-full max-w-md">

        {/* LOGO */}
        <div className="text-center mb-8">

          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl text-white">
              ✓
            </span>
          </div>

          <h1 className="text-3xl font-bold text-white">
            Actodo
          </h1>

          <p className="text-slate-400 mt-2">
            Start managing your activities
          </p>

        </div>


        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-2xl p-7 sm:p-9">

          <h2 className="text-2xl font-bold text-slate-900">
            Create account 🚀
          </h2>

          <p className="text-slate-500 mt-1 mb-6">
            Create your Actodo account.
          </p>


          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >

            {/* USERNAME */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Username
              </label>

              <input
                type="text"
                value={username}
                onChange={(event) =>
                  setUsername(event.target.value)
                }
                placeholder="Choose a username"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 bg-slate-50"
              />

            </div>


            {/* PASSWORD */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                placeholder="Create a password"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 bg-slate-50"
              />

            </div>


            {/* CONFIRM */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 bg-slate-50"
              />

            </div>


            {/* ERROR */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                ⚠️ {error}
              </div>
            )}


            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition"
            >
              Create Account →
            </button>

          </form>


          {/* LOGIN */}
          <p className="text-center text-slate-500 text-sm mt-6">

            Already have an account?{" "}

            <Link
              to="/"
              className="text-emerald-600 font-semibold hover:text-emerald-800"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Signup;