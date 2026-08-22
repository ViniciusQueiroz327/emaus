import { useEffect, useState } from "react";

import { gallery } from "../../../data/gallery";

import "./Carousel.css";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current === gallery.length - 1 ? 0 : current + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {gallery.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={`${index + 1}`}
          className={`carousel__image ${
            index === currentIndex ? "carousel__image--active" : ""
          }`}
          style={{ objectPosition: image.position }}
        />
      ))}
    </div>
  );
}

export default Carousel;