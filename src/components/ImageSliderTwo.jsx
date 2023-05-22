import React, { useState, useEffect } from "react";

const images = [
  {
    img: "../../src/assets/articlefive.jpg",
  },
  {
    img: "../../src/assets/arno-senoner-ooj5VfXq5o8-unsplash.jpg",
  },
  {
    img: "../../src/assets/jia-ye-erHlzWCN6zQ-unsplash.jpg",
  },
  {
    img: "../../src/assets/arno-senoner-Vn5VBVCP1EA-unsplash.jpg",
  },
];

const ImageSliderTwo = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId;

    if (!isHovered) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [currentImageIndex, isHovered]);

  return (
    <div className="">
      <img
        src={images[currentImageIndex].img}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-full h-[400px] rounded-lg shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};

export default ImageSliderTwo;
