const express = require("express");
const router = express.Router();
const Photo = require("../models/Photo");

// Route to get all photos
router.get("/", async (req, res) => {
  try {
    const photos = await Photo.find();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch photos" });
  }
});

// Route to add a new photo
router.post("/", async (req, res) => {
  const { title, imageUrl } = req.body;

  if (!title || !imageUrl) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newPhoto = new Photo({ title, imageUrl });
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(500).json({ error: "Failed to add photo" });
  }
});

// 🆕 DELETE route
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Photo.findByIdAndDelete(id);
    res.status(200).json({ message: "Photo deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting photo" });
  }
});

module.exports = router;
