const Blog = require("../models/blogModel");
const User = require("../models/userModel");

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get single blog
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get user blogs
const getUserBlogs = async (req, res) => {
  try {
    const user_id = req.user._id;
    const blogs = await Blog.find({ user_id }).sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Create blog
const createBlog = async (req, res) => {
  const { title, body, img } = req.body;

  const user = await User.findById(req.user._id); // Fetch the user document using the user ID
  const username = user.username; // Access the username from the user document

  try {
    const user_id = req.user._id;
    const blog = await Blog.createBlog(title, body, img, user_id, username);

    res.status(200).json(blog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    await blog.deleteOne();
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  getUserBlogs,
  createBlog,
  deleteBlog,
};
