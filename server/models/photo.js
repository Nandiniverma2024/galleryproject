const mongoose = require("mongoose");

// Define schema for a photo
const photoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

// Create and export Photo model
module.exports = mongoose.model("Photo", photoSchema);


