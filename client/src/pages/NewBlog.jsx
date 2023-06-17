import { useState } from "react";
import { useCreateBlog } from "../hooks/useCreateBlog";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");

  const { error, loading, createBlog } = useCreateBlog();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBlog(title, body, img);
  };

  return (
    <div className="screen-height flex justify-center  m-custom">
      <div className="max-w-custom w-full flex justify-center items-center mt-40 mb-20">
        <form onSubmit={handleSubmit} className="blog-form relative m-custom">
          <Link
            to="/"
            className="absolute top-2 left-2 mt-4 ml-4 text-primary-200 flex items-center gap-2 text-sm"
          >
            <ArrowLeft size={20} />
            Back
          </Link>
          <h2 className="font-bold text-white text-center text-4xl">
            Create new blog
          </h2>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Enter a title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              placeholder="The blog body goes here..."
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="img">Image (URL):</label>
            <input
              type="text"
              id="img"
              placeholder="https://www.example.com/img"
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          {error && <p className="error-msg">{error}</p>}
          <button type="submit" className="btn text-white" disabled={loading}>
            {loading ? (
              <span className="text-text-100">Loading...</span>
            ) : (
              "Create"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
