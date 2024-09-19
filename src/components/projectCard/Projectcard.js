import React from "react";
import "./ProjectCard.css";
import DefCat1 from "../../assets/images/jpg/cat-2605502_1280.jpg";
import { ButtonDemo, ButtonGit } from "../buttonsCustom/Buttons";
import GitHubImg from '../../assets/images/png/mdi_github.png'

const ProjectCard = ({text, onClick}) => {

    return(
        <div className='flex w-[300px] h-[300px] relative p-[1px] bg-gradient-to-b from-white/10 via-white/15 to-white/30 m-[18px] hover:bg-white/50 active:bg-[#8eb54b]'
        onClick={onClick}>
            <div className='flex flex-col items-center w-full h-full bg-black m-auto'>
                <p className='CardTextStyleMain'>{text}</p>
                <div className='flex w-auto h-[160px] mx-[7%] my-auto'>
                    <img src={DefCat1}></img>
                </div>
                <div className='flex w-full flex-row p-5 place-content-between'>
                    <ButtonGit imgSource = {GitHubImg} text = "GitHub"></ButtonGit>
                    <ButtonDemo text = "Demo"></ButtonDemo>
                    
                </div>
            </div>
        </div>
    )

}

export default ProjectCard