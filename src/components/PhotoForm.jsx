import { useState } from "react";
import axios from "axios";

export default function PhotoForm({ onUpload }) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/photos`, {
        title,
        imageUrl,
      });

      // before deployment

      // await axios.post("http://localhost:5000/api/photos", {
      //   title,
      //   imageUrl,
      // });
      setTitle("");
      setImageUrl("");
      onUpload(); // refresh gallery
    } catch (err) {
      console.error("Error uploading photo", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Photo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <button type="submit">Add Photo</button>
    </form>
  );
}
