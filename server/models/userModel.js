const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // removes whitespace
    minlength: 4,
  },
  password: {
    type: String,
    required: true,
  },
});

// Static signup method
userSchema.statics.signup = async function (username, password) {
  // Validations
  if (!username || !password) {
    throw Error("Username and password are required");
  }

  if (username.length < 3) {
    throw Error("Username must be at least 4 characters");
  }

  if (password.length < 6) {
    throw Error("Password must be at least 6 characters");
  }

  // Check if user exists
  const exist = await this.findOne({ username: { $regex: new RegExp('^' + username + '$', 'i') } });

  if (exist) {
    throw new Error("Username already in use");
  }

  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // Create new user
  const user = await this.create({ username, password: hash });

  return user;
};

// Static login method
userSchema.statics.login = async function (username, password) {
  // Validations
  if (!username || !password) {
    throw Error("Username and password are required");
  }

  // Check if user exists
  const user = await this.findOne({ username });

  if (!user) {
    throw Error("User does not exist");
  }

  // Check if password is correct
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect username or password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
