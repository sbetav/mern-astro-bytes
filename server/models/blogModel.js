const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 4,
    },
    body: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    user_id: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// Static create method
blogSchema.statics.createBlog = async function (title, body, img, user_id, username) {
  // Validations
  if (!title || !body) {
    throw Error("Title and body are required");
  }

  if (img && !validator.isURL(img)) {
    throw Error("Invalid image URL");
  }

  // Create new blog
  const blog = await this.create({ title, body, img, user_id, username });

  return blog;
};

module.exports = mongoose.model("Blog", blogSchema);
