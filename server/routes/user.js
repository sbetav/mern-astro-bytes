const express = require("express");

// controller functions
const {loginUser , signUpUser} = require("../controllers/userController");

const router = express.Router();

// Login route
router.post("/login", loginUser);

// Register route
router.post("/signUp", signUpUser);

module.exports = router;
