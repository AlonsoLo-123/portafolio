import React from "react";
import './Project.css';
import CarouselImg from '../../components/carousel/CarouselImg';


const Project = () => {
  
  return (
    <div className="flex min-h-screen flex-row z-10">
        <div className="flex justify-center items-start h-screen flex-col border-2 border-white">
                <p className="ProjectTextStyleMain">Projecto 1</p>
                <p className="ProjectTextStyleSub">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div className="border-2 border-white">
            
        </div>
        <CarouselImg></CarouselImg>
    </div>
  );
};
export default Project;
