require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api", require("./routes/datasetRoutes"));

// Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to OpenDataSet.ml API", docs: "/api/docs" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📦 Database: ${process.env.MONGO_URI}`);
});