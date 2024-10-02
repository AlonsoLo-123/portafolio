import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoCaretForwardCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { ButtonProjectCard } from "../buttonsCustom/Buttons";

const ProjectCard = ({content, preview, onClick, variants}) => {

    return(
        <motion.div variants={variants} whileHover={{ scale: 1.07 }} whileTap={{ scale: 1 }} className='flex w-[270px] h-[270px] relative p-[1px] bg-gradient-to-b from-white/10 via-white/15 to-white/30 m-[18px] focus:outline-none shadow-md shadow-green-lime/50'
        onClick={onClick}>
            <div className='flex flex-col items-center w-full h-full bg-black m-auto'>
                <p className='maintext-center text-contentbig text-white my-2'>{content[0].title}</p>
                <div className='flex w-auto h-[130px] mx-[7%] my-auto'>
                    <img src={preview} alt="Preview"/>
                </div>
                <div className='flex w-full flex-row p-5 place-content-between z-10'>
                    <ButtonProjectCard url={content[0].git} icon={<FaGithub className='h-full w-full' color='white'/>} text = "GitHub" color={"border-green-lime"}/>
                    <ButtonProjectCard url={content[0].demo} icon={<IoCaretForwardCircleSharp className='h-full w-full' color='white'/>} text = "Demo" color={"border-yellow-lime"}/>
                </div>
            </div>
        </motion.div>
    )

}

export default ProjectCard