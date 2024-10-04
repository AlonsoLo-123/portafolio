import React, { useState } from "react";
import CarouselImg from '../../components/carousel/CarouselImg';
import ProjectCard from '../../components/projectCard/ProjectCard';
import Data from '../../utils/ItemsCarousel.json';
import { motion } from "framer-motion";
// import { items1, itemsTxt1 } from "../../utils/ItemsCarousel";

const Project = () => {
  
  const [imageContent, setImageContent] = useState(Data[0].images);
  const [textContent, setTextContent] = useState(Data[0].text);
  const [currentIndex, setCurrentIndex] = useState(0);

  //Función para manejar el cambio de imagenes en el carousel
  const selectImages = (imageItems, textItems) => {
    setImageContent(imageItems);
    setTextContent(textItems);
    setCurrentIndex(0);
  };

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  };
  
  const itemProject = {
    hidden: { scaleX: 0, opacity: 0},
    visible: { scaleX: 1, opacity: 1 }
  };

  return (
    <div className="flex h-screen flex-col pt-20">
        <div className="flex flex-grow bg-gradient-to-r from-transparent via-black/10 to-transparent px-[2%] my-[3%] border-y-2 border-white/25">
          <div className="flex w-full flex-col items-center lg:items-start lg:flex-row my-[2%] place-content-between">   
            <div className="w-full lg:w-[30%] h-[200px] lg:h-[400px] my-[5%] lg:my-auto p-[2%] lg:me-[3%] bg-white-lime/75 border-2 border-black/25 rounded-md overflow-y-auto">
              <p className="text-acua-lime maintext-center text-main border-2 bg-black/15 border-black/10 rounded-lg p-2">{textContent[0].title}</p>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ ease: "easeOut", duration: 2 }} className="pt-[5%]">
                <p className="text-black font-serifmain text-content">{textContent[0].subTitle}</p>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scaleX: 0.5 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.5 }} className="flex w-full lg:w-[70%] my-auto h-[300px] lg:h-[400px] bg-white-lime/15 border-2 border-black/25 rounded-lg">
              <CarouselImg items = {imageContent} currentIndex = {currentIndex} setCurrentIndex = {setCurrentIndex}/>
            </motion.div>
          </div>
        </div>
      <div className='align-bottom mb-4 bg-white/15 border-y-2 border-white-lime/15'>
        <motion.div variants={container} initial="hidden" animate="visible" className='flex flex-row overflow-x-auto justify-start bg-black/15'>
        {Data.map((project) =>
          <ProjectCard key={project.id} variants={itemProject} content = {project.text} preview = {project.images[0].image} onClick = {() => selectImages(project.images, project.text)}/>
        )}
        </motion.div>
      </div>
    </div>
  );
};
export default Project;
