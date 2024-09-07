import React from 'react'
import {ButtonBottom} from '../buttonscustom/Buttons'
import GitHubImg from '../../assets/images/png/mdi_github.png'
import LinkedInImg from '../../assets/images/png/et_linkedin.png'
import CompuTImg from '../../assets/images/png/arcticons_computrabajo.png'

const Bottom = () =>{
    return(
        <div className='flex h-20 flex-row lg:justify-end justify-center lg:items-center w-[100%] bg-transparent lg:pe-10 mb-7'>
            <ButtonBottom imgSource={GitHubImg} url={"https://github.com/AlonsoLo-123"}></ButtonBottom>
            <ButtonBottom imgSource={LinkedInImg} url={"https://mx.linkedin.com/in/alonso-lópez-olguín-845094302"}></ButtonBottom>
            <ButtonBottom imgSource={CompuTImg} url={""}></ButtonBottom>
        </div>
    )
}
export default Bottom