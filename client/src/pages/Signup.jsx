import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, password);
  };

  return (
    <div className="flex items-center justify-center screen-height">
      <form onSubmit={handleSubmit} className="form m-custom">
        <h1 className="text-center text-white font-bold text-3xl">Sign up</h1>
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
          Create account
        </button>
        <p className="text-text-200 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary-200">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
