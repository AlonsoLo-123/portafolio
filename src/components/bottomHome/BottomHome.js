import React from 'react'
import {ButtonBottom} from '../buttonsCustom/Buttons'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const BottomHome = () =>{
    return(
        <div className='flex h-24 flex-row lg:justify-end justify-center items-center w-full bg-transparent lg:pe-10 mb-5 lg:mb-7 bg-gradient-to-l from-white/10 via-[#FFFFFF]/10 to-transparent'>
            <ButtonBottom icon = {<FaGithub className='h-full w-full' color='white'/>} url = {"https://github.com/AlonsoLo-123"}></ButtonBottom>
            <ButtonBottom icon = {<CiLinkedin className='h-full w-full' color='white'/>} url = {"https://mx.linkedin.com/in/alonso-lópez-olguín-845094302"}></ButtonBottom>
            <ButtonBottom icon = {<TbWorldWww className='h-full w-full' color='white'/>} url = {"https://alonsolo-123.github.io/portafolio/"}></ButtonBottom>
        </div>
    )
}
export default BottomHome