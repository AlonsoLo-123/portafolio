import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoCaretForwardCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { ButtonProjectCard } from "../buttonsCustom/Buttons";

const ProjectCard = ({content, preview, onClick, variants}) => {

    return(
        <motion.div variants={variants} whileHover={{ marginInline:"40px" }} whileTap={{ scale: 1.05 }} className='flex group flex-col w-[250px] h-[250px] relative p-[1px] bg-black m-[18px] focus:outline-none shadow-md shadow-green-lime/50'
        onClick={onClick}>
            <div className='flex flex-col items-end w-full h-full bg-white bg-cover'style={{ backgroundImage: `url(${require(`../../assets/images/${preview}`)})` }}>
            {console.log(preview)}
                <p className='absolute translate-x-10 maintext opacity-0 group-hover:opacity-100 duration-300 m-2 px-2 bg-black/75 border-2 border-green3-lime/75 max-w-max text-contentbig text-green-lime my-2'>{content[0].title}</p>
            </div>
            <div className="flex justify-end align-bottom">
                    <div className='flex w-full flex-row p-2 place-content-between z-10'>
                        <ButtonProjectCard url={content[0].git} icon={<FaGithub className='h-full w-full' color='white'/>} text = "GitHub" color={"border-green-lime"}/>
                        <ButtonProjectCard url={content[0].demo} icon={<IoCaretForwardCircleSharp className='h-full w-full' color='white'/>} text = "Demo" color={"border-acua-lime"}/>
                    </div>
                </div>
        </motion.div>
    )

}

export default ProjectCard