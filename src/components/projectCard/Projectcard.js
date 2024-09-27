import React from "react";
import "./ProjectCard.css";
import { ButtonDemo, ButtonGit } from "../buttonsCustom/Buttons";
import GitHubImg from '../../assets/images/png/mdi_github.png'
import { motion } from "framer-motion"

const ProjectCard = ({content, preview, onClick}) => {

    return(
        <div className='flex w-[270px] h-[270px] relative p-[1px] bg-gradient-to-b from-white/10 via-white/15 to-white/30 m-[18px] hover:bg-white/50 active:bg-[#8eb54b]'
        onClick={onClick}>
            <motion.div initial={{ opacity: 0, scale: 0 }}  animate={{ opacity: 1, scale: 1 }}  transition={{ duration: 0.5 }} className='flex flex-col items-center w-full h-full bg-black m-auto'>
                <p className='CardTextStyleMain'>{content[0].title}</p>
                <div className='flex w-auto h-[160px] mx-[7%] my-auto'>
                    <img src={preview}/>
                </div>
                <div className='flex w-full flex-row p-5 place-content-between z-10'>
                    <ButtonGit url={content[0].git} imgSource = {GitHubImg} text = "GitHub"/>
                    <ButtonDemo url={content[0].demo} text = "Demo"/>
                </div>
            </motion.div>
        </div>
    )

}

export default ProjectCard