import React, { Component, useState } from "react";
import "./CarouselImg.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const CarouselImg = ({items, currentIndex, setCurrentIndex}) => {
  
  // Función para manejar el cambio a la siguiente imagen
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Función para manejar el cambio a la imagen anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='flex h-full w-full relative justify-items-center border-2 border-white/15 rounded-md'>
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full min-h-full">
              <img src={item.image} className="h-full w-full" alt={item.content}/>
            </div>
          ))}
        </div>
      </div>
      {/* Botones de control */}
      <button className="carousel-button prev focus:outline-none" onClick={handlePrev}>
        <GrPrevious className="flex w-5 h-5"/>
      </button>
      <button className="carousel-button next focus:outline-none" onClick={handleNext}>
        <GrNext className="flex w-5 h-5"/>
      </button>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <div className={`transition-all w-3 h-3 bg-white rounded-full ${currentIndex === i ? "p-2" : "bg-opacity-50"}`}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselImg;
