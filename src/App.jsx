// import { useState } from 'react';
// import './App.css'; // Optional: your styles here

// function App() {
//   // Input states
//   const [url, setUrl] = useState('');
//   const [caption, setCaption] = useState('');

//   // Array of photos
//   const [photos, setPhotos] = useState([]);

//   // Form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newPhoto = { url, caption };
//     setPhotos([...photos, newPhoto]); // Add photo to UI
//     setUrl(''); // Clear input fields
//     setCaption('');
//   };

//   return (
//     <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
//       <h1>📸 My Photo Gallery</h1>

//       {/* Form */}
//       <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           style={{ padding: '0.5rem', marginRight: '1rem', width: '250px' }}
//         />
//         <input
//           type="text"
//           placeholder="Caption"
//           value={caption}
//           onChange={(e) => setCaption(e.target.value)}
//           style={{ padding: '0.5rem', marginRight: '1rem', width: '200px' }}
//         />
//         <button type="submit" style={{ padding: '0.5rem 1rem' }}>
//           Add Photo
//         </button>
//       </form>

//       {/* Photos list */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
//         {photos.map((photo, index) => (
//           <div
//             key={index}
//             style={{
//               border: '1px solid #ccc',
//               borderRadius: '10px',
//               padding: '1rem',
//               width: '220px',
//               textAlign: 'center',
//             }}
//           >
//             <img
//               src={photo.url}
//               alt={photo.caption}
//               style={{ width: '100%', height: '150px', objectFit: 'cover' }}
//             />
//             <p style={{ marginTop: '0.5rem' }}>{photo.caption}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;






// This is for Backend now
import { useState } from "react";
import PhotoForm from "./components/PhotoForm";
import PhotoGallery from "./components/PhotoGallery";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleUpload = () => {
    setRefresh(!refresh); // Toggle state to re-render PhotoGallery
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📸 My Photo Gallery</h1>
      <PhotoForm onUpload={handleUpload} />
      <PhotoGallery key={refresh} />
    </div>
  );
}

export default App;


