require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user");
const blogRoutes = require("./routes/blogs");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", userRoutes);
app.use("/api/blogs", blogRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
