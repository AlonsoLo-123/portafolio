import React from 'react'
import {ButtonBottom} from '../buttonsCustom/Buttons'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const BottomHome = () =>{
    return(
        <div className='flex h-24 flex-row lg:justify-end justify-center items-center w-full bg-transparent lg:pe-10 pb-5 lg:pb-7'>
            <ButtonBottom icon = {<FaGithub className='h-full w-full' color='white'/>} url = {"https://github.com/AlonsoLo-123"}></ButtonBottom>
            <ButtonBottom icon = {<CiLinkedin className='h-full w-full' color='white'/>} url = {"https://mx.linkedin.com/in/alonso-lópez-olguín-845094302"}></ButtonBottom>
            <ButtonBottom icon = {<TbWorldWww className='h-full w-full' color='white'/>} url = {"https://alonsolo-123.github.io/portafolio/"}></ButtonBottom>
        </div>
    )
}
export default BottomHome