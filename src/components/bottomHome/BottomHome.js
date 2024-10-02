import React from 'react'
import { buttomButtons } from '../../utils/ItemsHome';
import { ButtonBottom } from '../buttonsCustom/Buttons'

const BottomHome = () =>{

    return(
        <div className='flex h-24 flex-row lg:justify-end justify-center items-center w-full bg-transparent lg:pe-10 mb-5 lg:mb-7 bg-gradient-to-l from-acua-lime/50 via-black to-black/10 border-y-2 border-green3-lime/20'>
            {buttomButtons.map((button, index) => (
                <ButtonBottom key={index} text={button.text} icon={button.icon} url={button.url} color={button.color}/>
            ))}
        </div>
    )
}
export default BottomHome