const express = require("express");

// controller functions
const {
  getBlogs,
  getBlog,
  createBlog,
  getUserBlogs,
  deleteBlog,
} = require("../controllers/blogController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// Get all blogs
router.get("/", getBlogs);

// Get single blog
router.get("/:id", getBlog);

// Create blog
router.post("/", requireAuth, createBlog);

// Get user blogs
router.get("/user/:id", requireAuth, getUserBlogs);

// Delete blog
router.delete("/:id", requireAuth, deleteBlog);

module.exports = router;
