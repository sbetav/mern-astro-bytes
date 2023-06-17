import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setLoading(true);
    setError(null);

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // Save to local storage
      localStorage.setItem("user", JSON.stringify(json));

      // Dispatch to context
      dispatch({ type: "LOGIN", payload: json });

      setLoading(false);
    }
  };

  return { error, loading, login };
};
