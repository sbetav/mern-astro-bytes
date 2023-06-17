import { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import moment from "moment";
import { Trash, ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuthContext();
  const [blogs, setBlogs] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/blogs/user/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="screen-height flex justify-center  m-custom">
      <div className="max-w-3xl w-full">
        <div className="flex flex-col gap-2 my-36">
          <h2 className="text-center font-bold text-4xl text-white">
            All your posts
          </h2>
          <div className="w-full flex flex-col mt-8 gap-5">
            <Link
              to="/"
              className="top-2 left-2 mt-4 ml-4 text-primary-200 flex items-center gap-2 text-sm"
            >
              <ArrowLeft size={20} />
              Back
            </Link>
            {blogs &&
              blogs.map((blog) => (
                <SingleBlog
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                />
              ))}
            {blogs && blogs.length === 0 && (
              <p className="text-text-100 text-lg text-center -mt-6">
                You have not created any posts yet.
              </p>
            )}
            {!blogs && <p className="text-center mt-28 text-lg">Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const SingleBlog = ({ blog, fetchBlogs }) => {
  const { user } = useAuthContext();
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${blog._id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        fetchBlogs();
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="bg-bg-200 w-full rounded-lg flex items-center justify-between transition group overflow-hidden h-36">
      <div className="flex items-center">
        {blog.img && (
          <div className="w-36 h-36 bg-bg-300 flex-shrink-0">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="pl-8 flex flex-col gap-1">
          <h3 className="font-semibold text-xl line-clamp-1">{blog.title}</h3>
          <p className="text-text-200 line-clamp-2 w-full">{blog.body}</p>
          <p className="text-xs text-text-200 mt-2 opacity-80">
            By you - {moment(blog.createdAt).fromNow(true)} ago
          </p>
        </div>
      </div>
      <button onClick={handleDelete}>
        <Trash
          size={44}
          className="text-white mr-10 bg-primary-200 p-2 rounded-full hover:bg-primary-100 transition ml-10"
        />
      </button>
    </div>
  );
};

export default Profile;
