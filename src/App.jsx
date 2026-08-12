import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";

function App() {
  const [users, setUsers] = useState([
    {
      username: "Mukesh",
      password: "1234",
    },
  ]);

  const [loggedUser, setLoggedUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={
            <Login
              users={users}
              setLoggedUser={setLoggedUser}
            />
          }
        />

        {/* Signup */}
        <Route
          path="/Signup"
          element={
            <Signup
              users={users}
              setUsers={setUsers}
            />
          }
        />

        {/* Landing */}
        <Route
          path="/Landing"
          element={
            loggedUser ? (
              <Landing user={loggedUser} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;