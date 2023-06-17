import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/blogs/${id}`
      );
      const data = await response.json();
      setBlog(data);
    };
    getBlog();
  }, [id]);

  return (
    <div className="screen-height flex items-center justify-center">
      {blog ? (
        <div className="bg-bg-200 rounded-lg p-10 flex flex-col max-w-3xl m-custom gap-5 relative w-full mt-40 mb-20">
          <Link
            to="/"
            className="absolute top-2 left-2 mt-4 ml-4 text-primary-200 flex items-center gap-2 text-sm"
          >
            <ArrowLeft size={20} />
            Back
          </Link>

          <h2 className="font-bold text-white text-4xl text-center mt-6">
            {blog.title}
          </h2>
          {blog.img && (
            <img
              className="rounded m-auto"
              src={blog.img}
              alt={blog.title}
            />
          )}
          <p>{blog.body}</p>
        </div>
      ) : <p>Loading ...</p>}
    </div>
  );
};

export default BlogDetails;
