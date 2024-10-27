"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1042423/pexels-photo-1042423.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full md:w-3/4 lg:w-[90vw] h-60 sm:h-80 md:h-[60vh] lg:h-[60vh] mx-auto overflow-hidden pt-3">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-full h-full">
            <Image
              src={image}
              alt={`Carousel image ${index + 1}`}
              fill // Use fill instead of layout="fill"
              className="rounded-lg object-cover" // Use object-cover directly in className
              priority // Improves loading performance
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={handlePrev}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          &gt;
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
