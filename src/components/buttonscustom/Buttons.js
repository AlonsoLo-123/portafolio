import React from 'react'
import './ButtonsStyle.css'

export const ButtonMenu = (props) => {
    return (
        <button className='w-[97px] mr-3 bg-transparent hover:bg-gradient-to-b from-[#999999]/50 via-transparent to-transparent focus:outline-none hover:mb-2'>
            <p className="TextBStyle"> {props.text}</p>
        </button>
    )
}

export const ButtonBottom = (props) => {
    return (
        <button className='w-[60px] h-[60px] rounded-full border-2 border-solid border-lime-300 border-opacity-75 mr-5 bg-transparent hover:w-[70px] hover:h-[70px] focus:outline-none'>
            <img src={props.imgSource} className="flex w-full h-full object-contain"></img> 
        </button>
    )
}

export const ButtonNext = (props) => {
    return (
        <button className='w-[60px] h-[60px] bg-transparent hover:w-[70px] hover:h-[70px] focus:outline-none rotate-90 lg:rotate-0 mb-[3%]'>
            <img src={props.imgSource} className="flex w-full h-full object-contain"></img> 
        </button>
    )
}