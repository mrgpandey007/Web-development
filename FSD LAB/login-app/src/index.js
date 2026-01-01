import React, { useState } from "react";
import { createRoot } from 'react-dom/client';

function App() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple authentication check
    if (user === "admin" && pass === "1234") {
      setMsg("Login Successful!");
    } else {
      setMsg("Invalid Credentials");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        /><br/><br/>
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        /><br/><br/>
        <button type="submit">Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);