import React from 'react'
import { ButtonBottom } from '../buttonsCustom/Buttons'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const BottomHome = () =>{
    return(
        <div className='flex h-24 flex-row lg:justify-end justify-center items-center w-full bg-transparent lg:pe-10 mb-5 lg:mb-7 bg-gradient-to-l from-acua-lime/50 via-black to-black/10 border-y-2 border-green3-lime/20'>
            <ButtonBottom text={"GitHub"} icon = {<FaGithub className='h-full w-full' color='white'/>} url = {"https://github.com/AlonsoLo-123"} color={"border-black"}></ButtonBottom>
            <ButtonBottom text={"Linkedin"} icon = {<CiLinkedin className='h-full w-full' color='white'/>} url = {"https://mx.linkedin.com/in/alonso-lópez-olguín-845094302"} color={"border-blue-lime"}></ButtonBottom>
            <ButtonBottom text={"Pagina Web"} icon = {<TbWorldWww className='h-full w-full' color='white'/>} url = {"https://alonsolo-123.github.io/portafolio/"} color={"border-green-lime"}></ButtonBottom>
        </div>
    )
}
export default BottomHome