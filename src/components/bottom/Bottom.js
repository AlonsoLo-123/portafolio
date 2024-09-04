import React from 'react'
import {ButtonBottom} from '../buttonscustom/Buttons'
import GitHubImg from '../../assets/images/png/mdi_github.png'
import LinkedInImg from '../../assets/images/png/et_linkedin.png'
import CompuTImg from '../../assets/images/png/arcticons_computrabajo.png'

const Bottom = () =>{
    return(
        <div className='flex flex-row justify-end items-center w-[100%] h-20 bg-transparent pe-10 mb-10 inset-x-0 bottom-0 absolute '>
            <ButtonBottom imgSource={GitHubImg}></ButtonBottom>
            <ButtonBottom imgSource={LinkedInImg}></ButtonBottom>
            <ButtonBottom imgSource={CompuTImg}></ButtonBottom>
        </div>
    )
}
export default Bottom