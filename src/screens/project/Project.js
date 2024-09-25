import React, { useState } from "react";
import './Project.css';
import CarouselImg from '../../components/carousel/CarouselImg';
import ProjectCard from '../../components/projectCard/ProjectCard';
import { items1, itemsTxt1 } from "../../utils/ItemsCarousel";

const Project = () => {

  const [imageContent, setImageContent] = useState(items1);
  const [textContent, setTextContent] = useState(itemsTxt1);
  const [currentIndex, setCurrentIndex] = useState(0);

  //Función para manejar el cambio de imagenes en el carousel
  const selectImages = (imageItems, textItems) => {
    setImageContent(imageItems);
    setTextContent(textItems);
    setCurrentIndex(0);
  };

  return (
    <div className="flex h-screen flex-col pt-20">
      <div className="flex flex-grow justify-center">
        <div className="flex flex-col items-center lg:items-start lg:flex-row bg-gradient-to-r from-transparent via-[#FFFFFF]/10 to-transparent w-full px-[5%] my-auto">
          <div className="flex flex-col w-full">
                    <p className="ProjectTextStyleMain">{textContent[0].title}</p>
                    <p className="ProjectTextStyleSub">{textContent[0].subTitle}</p>
          </div>
            <CarouselImg size = "max-w-[480px] max-h-[270px]" items = {imageContent} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}/>
        </div>
      </div>
      <div className='flex align-bottom w-full mb-2 bg-gradient-to-r from-transparent via-[#FFFFFF]/10 to-transparent'>
        <div className='flex flex-row overflow-x-auto justify-evenly'>
        <ProjectCard content = {itemsTxt1} preview = {items1[0].image} onClick = {() => selectImages(items1, itemsTxt1)}/>
        </div>
      </div>
    </div>
  );
};
export default Project;
