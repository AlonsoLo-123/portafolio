import React from "react";
import "./ProjectCard.css";
import DefCat1 from "../../assets/images/jpg/cat-2605502_1280.jpg";
import { ButtonGit } from "../buttonsCustom/Buttons";
import GitHubImg from '../../assets/images/png/mdi_github.png'
import ImgNext from '../../assets/images/png/ooui_next-ltr.png'

const ProjectCard = ({text}) => {

    return(
        <div className='flex relative w-[300px] h-[300px] p-[1px] bg-gradient-to-b from-white/10 via-white/15 to-white/30 m-[18px]  '>
            <div className='flex flex-col items-center w-full h-full bg-black m-auto'>
                <p className='CardTextStyleMain'>{text}</p>
                <div className='flex w-auto h-[160px] mx-[7%] my-auto'>
                    <img src={DefCat1}></img>
                </div>
                <div className='flex w-full flex-row p-5 place-content-between'>
                    <ButtonGit imgSource = {GitHubImg} text = "GitHub"></ButtonGit>
                    <ButtonGit imgSource = {ImgNext} text = "Demo"></ButtonGit>
                </div>
            </div>
        </div>
    )

}

export default ProjectCard