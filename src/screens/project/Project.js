import React from "react";
import './Project.css';
import CarouselImg from '../../components/carousel/CarouselImg';


const Project = () => {
  
  return (
    <div className="flex min-h-screen z-10">
      <div className="flex flex-col lg:flex-row bg-gradient-to-r from-transparent via-[#FFFFFF]/10 to-transparent h-full w-full my-auto">
        <div className="flex justify-center flex-col w-full">
                  <p className="ProjectTextStyleMain">Projecto 1</p>
                  <p className="ProjectTextStyleSub">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
          <CarouselImg></CarouselImg>
        </div>
    </div>
  );
};
export default Project;
