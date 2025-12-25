import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleLogin = () => {
    if (email === "vendor@gmail.com" && password === "vendor444") {
      localStorage.setItem("isAuth", "true");
      onLogin();
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };  
//
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Vendor Login</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
