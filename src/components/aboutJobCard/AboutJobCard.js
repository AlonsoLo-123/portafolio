import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

const AboutJobCard = ({title, content}) => {
  return (
    <div className = 'bg-gradient-to-r from-white/15 to-transparent rounded-lg'>
      <div className = 'flex flex-row'>
        <VscDebugBreakpointLogUnverified className = "flex items-center object-contain m-1"/>
        {title}
      </div>
      <div className = 'border-[1px] border-white/10 scale-95'/>
      <div className = 'px-10 mb-5'>
        {content}
      </div>
    </div>
  );
};

export default AboutJobCard;
