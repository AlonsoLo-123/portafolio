import React from 'react'
import {ButtonBottom} from '../buttonscustom/Buttons'
import GitHubImg from '../../assets/images/png/mdi_github.png'
import LinkedInImg from '../../assets/images/png/et_linkedin.png'
import CompuTImg from '../../assets/images/png/arcticons_computrabajo.png'

const Bottom = () =>{
    return(
        <div className='flex bottom-0 h-20 absolute flex-row lg:justify-end justify-center lg:items-center w-[100%] bg-transparent lg:pe-10 mb-10'>
            <ButtonBottom imgSource={GitHubImg}></ButtonBottom>
            <ButtonBottom imgSource={LinkedInImg}></ButtonBottom>
            <ButtonBottom imgSource={CompuTImg}></ButtonBottom>
        </div>
    )
}
export default Bottom