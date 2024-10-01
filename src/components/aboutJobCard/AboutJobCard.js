import React from "react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { motion } from "framer-motion";

const AboutJobCard = ({title, content, variants}) => {
  return (
    <motion.div variants={variants} className = 'bg-gradient-to-r from-white/15 to-transparent rounded-lg'>
      <div className = 'flex flex-row text-yellow-lime'>
        <VscDebugBreakpointLogUnverified className = "flex items-center object-contain m-1"/>
        {title}
      </div>
      <div className = 'border-[1px] border-white/10 scale-95'/>
      <div className = 'px-10 mb-5'>
        {content}
      </div>
    </motion.div>
  );
};

export default AboutJobCard;
