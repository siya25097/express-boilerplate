const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

// const userRoutes = require("./routes/userRoutes");
// const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running with MongoDB");
});

// Error handler
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));