"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Inicio() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
  };

  return (
    <div className="carousel relative w-full">
      <div
        id="slide1"
        className={`carousel-item relative w-full h-72 ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <Image
          src="/banner1.jpg"
          className="w-full h-full object-cover"
          alt="Banner"
          layout="fill"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            onClick={handlePrevSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❮
          </button>
          <button
            onClick={handleNextSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❯
          </button>
        </div>
      </div>
      <div
        id="slide2"
        className={`carousel-item relative w-full h-72 ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <Image
          src="/banner2.jpg"
          className="w-full h-full object-cover"
          alt="Banner"
          layout="fill"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            onClick={handlePrevSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❮
          </button>
          <button
            onClick={handleNextSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❯
          </button>
        </div>
      </div>
      <div
        id="slide3"
        className={`carousel-item relative w-full h-72 ${
          currentSlide === 3 ? "block" : "hidden"
        }`}
      >
        <Image
          src="/banner3.jpg"
          className="w-full h-full object-cover"
          alt="Banner"
          layout="fill"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            onClick={handlePrevSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❮
          </button>
          <button
            onClick={handleNextSlide}
            className="btn btn-circle text-white rounded-full bg-custom-yellow p-2 hover:bg-custom-yellow-hover"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}
