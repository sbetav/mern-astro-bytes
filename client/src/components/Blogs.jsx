import React from "react";
import { Link } from "react-router-dom";
import { PlusCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);

  const getBlogs = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`, {
      method: "GET",
    });
    const json = await response.json();
    setBlogs(json);
  };

  useEffect(() => {
 getBlogs();
  });

  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-end">
        <Link to="/create-blog" className="btn flex text-white">
          <PlusCircle className="mr-2" size={24} weight="bold" />
          New blog
        </Link>
      </div>
      <div className="w-full flex flex-col mt-4 gap-5">
        {blogs && blogs.map((blog) => <SingleBlog key={blog._id} blog={blog} />)}
        {!blogs && <p className="text-center mt-32 text-lg">Loading...</p>}


      </div>
    </div>
  );
};

export default Blogs;
