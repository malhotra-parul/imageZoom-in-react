import React, { useState } from "react";
import "./styles.css";
import ImageZoom from "../imageZoom/ImageZoom";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  const onClose = () => {
    setIsActive(false);
  };

  const onZoom = () => {
    setIsActive(true);
  };
  return (
      <div className="imageContainer">
    <ImageZoom
      isActive={isActive}
      imageURL={
        "https://i.ibb.co/f9xWK9v/woman-wearing-pink-collared-half-sleeved-top-1036623.jpg"
      }
      onZoom={onZoom}
      onClose={onClose}
    />
    </div>
  );
}
