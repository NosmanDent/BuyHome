import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

function Card({ slides = [] }) {
  const [clicked, setClicked] = useState(Array(slides.length).fill(false));

  const handleClick = (index) => {
    setClicked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="relative ">
      <div className="flex flex-row items-center mx justify-center pb-6 gap-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`h-[400px] w-[100px] bg-gray-300 rounded-lg relative inline-block cursor-pointer ${
              clicked[index]
                ? "w-[500px] transition-all duration-700 ease-in-out"
                : "transition-all duration-700 ease-in-out"
            }`}
            onClick={() => handleClick(index)}
          >
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover rounded-lg cursor-pointer "
            />
            <div className="w-full px-2 text-xs h-full absolute top-0 rounded-lg gap-2 left-0 bg-black/50 flex flex-col flex-1 items-center justify-center text-center">
              <h1 className="text-white font-serif font-bold">{slide.title}</h1>
              <h1 className="text-white font-bold font-mono">${slide.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
