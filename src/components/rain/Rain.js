import React, { useEffect, useState } from 'react';
import './Rain.css';

const Rain = () => {
  const [drops, setDrops] = useState([]);

  // Función para generar gotas de lluvia con posiciones aleatorias
  useEffect(() => {
    const createRaindrops = () => {
      const newDrops = [];
      const numDrops = 50; // Cantidad de gotas de lluvia
      
      for (let i = 0; i < numDrops; i++) {
        const leftPosition = Math.random() * 100; // Genera una posición aleatoria entre 0% y 100%
        const animationDuration = Math.random() * 0.1 + 0.5; // Genera una duración de animación aleatoria entre 1s y 2.5s
        newDrops.push({ left: `${leftPosition}%`, duration: `${animationDuration}s` });
      }

      setDrops(newDrops);
    };

    createRaindrops();
  }, []);

  return (
    <div className='fixed overflow-hidden w-full h-[70%] mt-20'>
      {/* Crear gotas de lluvia aleatorias */}
      {drops.map((drop, index) => (
        <div
          key={index}
          className="raindrop"
          style={{ left: drop.left, animationDuration: drop.duration }}
        ></div>
      ))}
    </div>
  )
}

export default Rain;

