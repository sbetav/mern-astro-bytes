const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const requireAuth = async (req, res, next) => {
  // Verify authorization
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "You must be logged in." });
  }

  // Extract token
  const token = authorization.replace("Bearer ", "");

  // Verify token
  try {
    const secret = process.env.JWT_SECRET;
    const { _id } = jwt.verify(token, secret);

    req.user = await User.findById(_id).select("_id");

    next();
  } catch (err) {
    return res.status(401).json({ error: "You are not authorized" });
  }
};

module.exports = requireAuth;
