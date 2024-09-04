import React from 'react'
import './ButtonsStyle.css'

export const ButtonMenu = (props) => {
    return (
        <button className='w-[97px] mr-3 bg-transparent hover:bg-gradient-to-b from-[#999999]/50 via-transparent to-transparent'>
            <p className="TextBStyle"> {props.text}</p> 
        </button>
    )
}

export const ButtonBottom = (props) => {
    return (
        <button className='w-[60px] h-[60px] rounded-full border-2 border-solid border-lime-300 mr-5 bg-transparent hover:w-[70px] hover:h-[70px]'>
            <img src={props.imgSource} className="flex w-full h-full object-contain"></img> 
        </button>
    )
}