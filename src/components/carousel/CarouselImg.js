import React, { Component, useState } from "react";
import DefCat1 from "../../assets/images/jpg/cat-2605502_1280.jpg";
import DefCat2 from "../../assets/images/jpg/cat-323262_1280.jpg";
import DefCat3 from "../../assets/images/jpg/kitten-4611189_1280.jpg";
import "./CarouselImg.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const CarouselImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, content: "Imagen 1", image: DefCat1 },
    { id: 2, content: "Imagen 2", image: DefCat2 },
    { id: 3, content: "Imagen 3", image: DefCat3 },
  ];

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
    <div className="flex max-w-[650px] max-h-[320px] relative mx-auto lg:mx-[3%] my-[3%] lg:my-[2%] justify-items-center">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="min-w-full min-h-full">
              <img src={item.image} className="h-full w-full"></img>
            </div>
          ))}
        </div>
      </div>
      {/* Botones de control */}
      <button className="carousel-button prev" onClick={handlePrev}>
        <GrPrevious className="flex w-5 h-5" />
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        <GrNext className="flex w-5 h-5" />
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
