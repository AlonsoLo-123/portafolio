import React, { useState } from "react";
import './Project.css';
import CarouselImg from '../../components/carousel/CarouselImg';
import ProjectCard from '../../components/projectCard/ProjectCard';
import { items1, itemsTxt1 } from "../../utils/ItemsCarousel";
import { motion } from "framer-motion";

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
        <div className="flex flex-col items-center lg:items-start lg:flex-row bg-gradient-to-r from-transparent via-[#FFFFFF]/10 to-transparent w-full px-[4%] my-[3%]">
          <div className="flex flex-col w-full my-[3%] pe-[3%]">
                    <p className="ProjectTextStyle Main">{textContent[0].title}</p>
                    <motion.div initial={{ x:-300, opacity:0 }} animate={{ x: 0, opacity:1 }} transition={{ ease: "easeOut", duration: 1 }}>
                      <p className="ProjectTextStyle Sub">{textContent[0].subTitle}</p>
                    </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scaleX: 0.5 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.5 }} className="flex my-auto max-w-[672px] max-h-[378px]">
            <CarouselImg size = "" items = {imageContent} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}/>
          </motion.div>
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
