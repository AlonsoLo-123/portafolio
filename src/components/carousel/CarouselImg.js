import React, { Component, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import DefCat1 from '../../assets/images/jpg/cat-2605502_1280.jpg';
import DefCat2 from '../../assets/images/jpg/cat-323262_1280.jpg';
import DefCat3 from '../../assets/images/jpg/kitten-4611189_1280.jpg';
import "./CarouselImg.css";

const CarouselImg = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        { id: 1, content: "Imagen 1", bgColor: "bg-blue-500" },
        { id: 2, content: "Imagen 2", bgColor: "bg-green-500" },
        { id: 3, content: "Imagen 3", bgColor: "bg-red-500" },
    ];

    // Función para manejar el cambio a la siguiente imagen
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Función para manejar el cambio a la imagen anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
  };

    return(
        <div className="carousel-container">
      <div className="carousel-content">
        {items.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === currentIndex ? "active" : "inactive"} ${item.bgColor}`}>
            {item.content}
            {console.log(currentIndex)}
          </div>
        ))}
      </div>

      {/* Botones de control */}
      <button className="carousel-button prev" onClick={handlePrev}>
        Anterior
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        Siguiente
      </button>
    </div>
        );
      };

export default CarouselImg;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>