import React, { useState } from "react";
import './Project.css';
import CarouselImg from '../../components/carousel/CarouselImg';
import ProjectCard from '../../components/projectCard/ProjectCard';

import { itemsDefault, itemsTxtDefault, items1, itemsTxt1, items2, itemsTxt2, items3, itemsTxt3 } from "../../utils/ItemsCarousel";

const Project = () => {

  const [imageContent, setImageContent] = useState(itemsDefault);
  const [textContent, setTextContent] = useState(itemsTxtDefault);
  const [currentIndex, setCurrentIndex] = useState(0);

  //Función para manejar el cambio de imagenes en el carousel
  const selectImages = (imageItems, textItems) => {
    setImageContent(imageItems);
    setTextContent(textItems);
    setCurrentIndex(0);
  };

  return (
    <div className="flex min-h-screen flex-col z-10 pb-1 pt-20">
      <div className="flex flex-col lg:flex-row bg-gradient-to-r from-transparent via-[#FFFFFF]/10 to-transparent h-full w-full px-[5%] my-auto">
        <div className="flex justify-start flex-col w-full">
                  <p className="ProjectTextStyleMain">{textContent[0].title}</p>
                  <p className="ProjectTextStyleSub">{textContent[0].subTitle}</p>
        </div>
          <CarouselImg size = "max-w-[480px] max-h-[270px]" items = {imageContent} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}></CarouselImg>
      </div>
      <div className='flex flex-row overflow-x-auto scroll-div justify-evenly'>
        <ProjectCard text = "Proyecto 1" onClick = {() => selectImages(items1, itemsTxt1)}></ProjectCard>
        <ProjectCard text = "Proyecto 2" onClick = {() => selectImages(items2, itemsTxt2)}></ProjectCard>
        <ProjectCard text = "Proyecto 3" onClick = {() => selectImages(items3, itemsTxt3)}></ProjectCard>
        <ProjectCard text = "Proyecto 4"></ProjectCard>
        <ProjectCard text = "Proyecto 5"></ProjectCard>
      </div>
    </div>
  );
};
export default Project;
