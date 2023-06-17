import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import moment from 'moment';

const SingleBlog = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog._id}`} className="bg-bg-200 w-full rounded-lg flex items-center justify-between hover:bg-bg-300 transition group overflow-hidden h-28 sm:h-36">
      <div className="flex items-center">
        {blog.img && (
          <div className="w-28 h-28 bg-bg-300 flex-shrink-0 sm:w-36 sm:h-36">
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="pl-4 flex flex-col gap-1 sm:pl-7">
          <h3 className="font-semibold text-xl line-clamp-1">{blog.title}</h3>
          <p className="text-text-200 line-clamp-1 w-full sm:line-clamp-2">{blog.body}</p>
          <p className="text-xs text-text-200 mt-2 opacity-80">By {blog.username} - {moment(blog.createdAt).fromNow(true)} ago</p>
        </div>
      </div>
      <div className="ml-32 pr-6 hidden sm:block">
        <ArrowRight
          size={34}
          className="-translate-x-5 group-hover:-translate-x-2 transition"
        />
      </div>
    </Link>
  );
};

export default SingleBlog;
