const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
};

// Login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.login(username, password);

    // Create token
    const token = createToken(user._id);

    res.status(200).json({ username, token, id: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Signup user
const signUpUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.signup(username, password);

    // Create token
    const token = createToken(user._id);

    res.status(200).json({ username, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
