import React from "react";

const ImageGallery = ({ images }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {images.map((image, index) => (
        <img key={index} src={image} alt="dog" style={{ width: "200px", height: "200px", objectFit: "cover" }} />
      ))}
    </div>
  );
};

export default ImageGallery;
