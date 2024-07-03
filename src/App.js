import { useState } from "react";


function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "user" && password === "password") {
      setMessage(`Welcome, ${userName}!`);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            placeholder="Username"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default App;