import './App.css';
import Header from './components/header/Header';
import Home from './screens/home/Home';
import Project from './screens/project/Project';
import { useState } from 'react';
import CarouselImg from './components/carousel/CarouselImg';
import About from './screens/about/About';

function App() {
  
  const screens = [
    <div className=" flex flex-col relative min-h-screen bg-[url('./assets/images/jpeg/Entrada.jpeg')] bg-cover bg-center"><Home/></div>,
    <div className=" flex flex-col relative min-h-screen bg-[url('./assets/images/jpeg/Entrada.jpeg')] bg-cover bg-center"><Home/></div>,
    <div className=" flex flex-col relative min-h-screen bg-[url('./assets/images/jpeg/Entrada.jpeg')] bg-cover bg-center"><Home/></div>
  ];

  return (
      <div className="flex flex-col relative min-h-screen bg-[url('./assets/images/jpeg/Entrada.jpeg')] bg-cover bg-center">
        <Header/>
        <About/>
      </div>
  );
}
export default App;
