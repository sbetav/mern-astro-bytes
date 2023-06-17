import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useCreateBlog = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const createBlog = async (title, body, img) => {
    setLoading(true);
    setError(null);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ title, body, img }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      setLoading(false);
      navigate("/");
    }
  };

  return { error, loading, createBlog };
};
