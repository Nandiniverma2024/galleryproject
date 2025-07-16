// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function PhotoGallery() {
//   const [photos, setPhotos] = useState([]);

//   const fetchPhotos = async () => {
//     const res = await axios.get("http://localhost:5000/api/photos");
//     setPhotos(res.data);
//   };

//   useEffect(() => {
//     fetchPhotos();
//   }, []);

//   return (
//     <div>
//       <h2>Photo Gallery</h2>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {photos.map((photo) => (
//           <div key={photo._id}>
//             <img src={photo.imageUrl} alt={photo.title} width="200" />
//             <p>{photo.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// After Adding delete functionality
import { useEffect, useState } from "react";
import axios from "axios";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

  // Fetch photos from backend
  const fetchPhotos = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/photos`);

      // Before deployment

      // const res = await axios.get("http://localhost:5000/api/photos");
      setPhotos(res.data);
    } catch (err) {
      console.error("Error fetching photos", err);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  // 🧹 Handle Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/photos/${id}`);
      setPhotos((prev) => prev.filter((photo) => photo._id !== id));
    } catch (err) {
      console.error("Error deleting photo", err);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {photos.map((photo) => (
        <div
          key={photo._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem",
            width: "220px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <img
            src={photo.imageUrl}
            alt={photo.title}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
          <p style={{ marginTop: "0.5rem" }}>{photo.title}</p>
          <button
            onClick={() => handleDelete(photo._id)}
            style={{
              marginTop: "0.5rem",
              background: "#ff4d4d",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🗑 Delete
          </button>
        </div>
      ))}
    </div>
  );
}
