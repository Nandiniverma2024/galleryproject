// Load environment variables from .env file
require("dotenv").config();

// Import necessary packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import photo routes
const photoRoutes = require("./routes/photoRoutes");

// Initialize the express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors()); // Allows frontend (React) to access backend (Express)
app.use(express.json()); // Allows parsing JSON from request bodies

// Use the photo routes (must come before starting the server)
app.use("/api/photos", photoRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Sample route to test backend
app.get("/", (req, res) => {
  res.send("🎉 Backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
