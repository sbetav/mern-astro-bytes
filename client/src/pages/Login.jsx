import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { error, loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex items-center justify-center screen-height">
      <form onSubmit={handleSubmit} className="form m-custom">
        <h1 className="text-center text-white font-bold text-3xl">Login</h1>
        <div className="flex flex-col gap-3">
          <input
            className="input"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-msg">{error}</p>}
        <button type="submit" disabled={loading} className="btn !text-white">
          Login
        </button>
        <p className="text-text-200 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primary-200">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
